import { writable } from "svelte/store";
import { timestamp } from "../utils";

function createLoadingStore() {
    const period = 100;
    let intervalID = null;

    const loadingStore = writable({
        jobs: null,
        currentJob: null,
    });

    function timer() {
        loadingStore.update((loading) => {
            if (loading.currentJob < loading.jobs.length) {
                loading.jobs[loading.currentJob].elapsed = timestamp() - loading.jobs[loading.currentJob].startTimestamp;
            }
            return loading;
        });
    }

    function start(msgs) {
        let jobs = [];
        for (let i = 0; i < msgs.length; i++) {
            jobs.push({
                msg: msgs[i],
                started: i === 0,
                startTimestamp: i === 0 ? timestamp() : 0,
                elapsed: 0,
                completed: false,
            });
        }
        intervalID = setInterval(timer, period);
        loadingStore.update((loading) => {
            loading.jobs = jobs;
            loading.currentJob = 0;
            return loading;
        });
    }

    function next() {
        loadingStore.update((loading) => {
            loading.jobs[loading.currentJob].completed = true;
            loading.currentJob++;
            if (loading.currentJob < loading.jobs.length) {
                loading.jobs[loading.currentJob].started = true;
                loading.jobs[loading.currentJob].startTimestamp = timestamp();
            }
            return loading;
        });
    }

    function reset() {
        clearInterval(intervalID);
        loadingStore.set({
            jobs: null,
            currentJob: null,
        });
    }

    return {
        subscribe: loadingStore.subscribe,
        start,
        next,
        reset,
    }
}

export const loadingStore = createLoadingStore();
