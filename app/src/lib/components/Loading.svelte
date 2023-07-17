<script>
    import { loadingStore } from "$lib/stores/loading";
    import completed from "$lib/images/completed.png";
    import inprogress from "$lib/images/inprogress.png";
    import pending from "$lib/images/pending.png";
    import { fade } from "svelte/transition";

    let jobs = null;
    loadingStore.subscribe((loading) => {
        jobs = loading.jobs;
    });
</script>

{#if jobs !== null}
    <div class="container">
        <div class="box" transition:fade>
            <div class="dot-pulse" />
            <div class="jobs">
                {#each jobs as job}
                    <div class="job">
                        <img
                            class="status-img"
                            src={job.completed
                                ? completed
                                : job.started
                                ? inprogress
                                : pending}
                            alt=""
                        />
                        <div class="msg" class:msg-completed={job.completed}>
                            {job.msg}
                        </div>
                        <div class="elapsed">
                            {job.started
                                ? ` (${(
                                      Math.floor(job.elapsed / 100) / 10
                                  ).toFixed(1)}s)`
                                : ""}
                        </div>
                        <div />
                    </div>
                {/each}
            </div>
        </div>
    </div>
{/if}

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 5000;
    }

    .box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: white;
        padding: 30px;
        border-radius: 2px;
    }

    .jobs {
        width: 300px;
        padding: 30px 30px 0px 30px;
    }

    .job {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 3px;
        font-size: 15px;
        font-family: "Gill Sans";
    }

    .msg {
        width: 250px;
    }

    .msg-completed {
        color: rgba(0, 0, 0, 0.5);
    }

    .status-img {
        width: 15px;
        margin-right: 10px;
    }

    .dot-pulse {
        margin: 30px;
        position: relative;
        left: -9999px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: #9880ff;
        color: #9880ff;
        box-shadow: 9999px 0 0 -5px;
        animation: dot-pulse 1.5s infinite linear;
        animation-delay: 0.25s;
    }
    .dot-pulse::before,
    .dot-pulse::after {
        content: "";
        display: inline-block;
        position: absolute;
        top: 0;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: #9880ff;
        color: #9880ff;
    }
    .dot-pulse::before {
        box-shadow: 9984px 0 0 -5px;
        animation: dot-pulse-before 1.5s infinite linear;
        animation-delay: 0s;
    }
    .dot-pulse::after {
        box-shadow: 10014px 0 0 -5px;
        animation: dot-pulse-after 1.5s infinite linear;
        animation-delay: 0.5s;
    }

    @keyframes dot-pulse-before {
        0% {
            box-shadow: 9984px 0 0 -5px;
        }
        30% {
            box-shadow: 9984px 0 0 2px;
        }
        60%,
        100% {
            box-shadow: 9984px 0 0 -5px;
        }
    }
    @keyframes dot-pulse {
        0% {
            box-shadow: 9999px 0 0 -5px;
        }
        30% {
            box-shadow: 9999px 0 0 2px;
        }
        60%,
        100% {
            box-shadow: 9999px 0 0 -5px;
        }
    }
    @keyframes dot-pulse-after {
        0% {
            box-shadow: 10014px 0 0 -5px;
        }
        30% {
            box-shadow: 10014px 0 0 2px;
        }
        60%,
        100% {
            box-shadow: 10014px 0 0 -5px;
        }
    }
</style>
