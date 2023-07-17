<script>
    import { gameStore } from "$lib/stores/game";
    import Table from "$lib/components/Table.svelte";

    let round;
    let result;
    let myChoice;
    let opponentChoice;
    gameStore.subscribe((game) => {
        round = game.round;
        result = game.result;
        myChoice = game.myChoice;
        opponentChoice = game.opponentChoice;
    });
</script>

<div class="home-container">
    {#if result !== null}
        <div class="result">{result}</div>
    {/if}
    <div class="table-container">
        <Table />
    </div>
    {#if myChoice !== null}
        <div class="my-choice">{myChoice ? "Call!" : "Fold!"}</div>
    {/if}
    {#if opponentChoice !== null}
        <div class="opponent-choice">{opponentChoice ? "Call!" : "Fold!"}</div>
    {/if}
    <div class="btn-wrapper">
        {#if round === 0}
            <button class="btn" on:click={() => gameStore.startGame()}>
                Start Game
            </button>
        {:else if round === 1}
            <button class="btn" on:click={() => gameStore.round1()}>
                Shuffle Deck
            </button>
        {:else if round === 2}
            <button class="btn" on:click={() => gameStore.round2()}>
                Decrypt Card
            </button>
        {:else if round === 3}
            <button class="btn" on:click={() => gameStore.round3(true)}>
                Call
            </button>
            <button class="btn" on:click={() => gameStore.round3(false)}>
                Fold
            </button>
        {:else if round === 4}
            <button class="btn" on:click={() => gameStore.round4()}>
                Decrypt Card
            </button>
        {:else if round === 5}
            <button class="btn" on:click={() => gameStore.round5()}>
                Get Result
            </button>
        {/if}
    </div>
</div>

<style>
    .home-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .table-container {
        position: absolute;
        top: 150px;
    }

    .result {
        position: absolute;
        top: 60px;
        left: 200px;
        font-size: 30px;
    }

    .my-choice {
        position: absolute;
        top: 770px;
        left: 55%;
        font-size: 30px;
    }

    .opponent-choice {
        position: absolute;
        top: 120px;
        left: 55%;
        font-size: 30px;
    }

    .btn-wrapper {
        position: absolute;
        top: 750px;
        left: 450px;
        display: flex;
    }

    .btn {
        width: 150px;
        height: 60px;
        background: #162944;
        color: #fff;
        border: 0px;
        border-radius: 30px;
        padding: 18px 36px;
        display: flex;
        margin: 0px 10px;
        justify-content: center;
        align-items: center;
        font-family: Impact;
        font-size: 14px;
        letter-spacing: 1px;
        cursor: pointer;
    }
    .btn:hover {
        box-shadow: inset 400px 0 0 0 #d80286;
    }
</style>
