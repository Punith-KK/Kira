<script>
    import { crossfade, fly } from "svelte/transition";
    import { flip } from "svelte/animate";

    import player from "$lib/images/player.png";
    import Card from "$lib/components/Card.svelte";
    import { tableStore } from "../stores/table";

    let cards;
    tableStore.subscribe((table) => {
        cards = table.cards;
    });

    $: deck_cards = cards.filter((card) => card.owner === 0);
    $: my_cards = cards.filter((card) => card.owner === 1);
    $: opponent_cards = cards.filter((card) => card.owner === 2);

    const [send, receive] = crossfade({});
</script>

<div class="game-table">
    <div class="deck">
        {#each deck_cards as card (card.index)}
            <div
                in:fly={{ y: 100, duration: 500 }}
                out:send={{ key: card.index }}
                animate:flip={{ duration: 400 }}
            >
                <Card bind:number={card.number} bind:hidden={card.hidden} />
            </div>
        {/each}
    </div>

    <div class="me">
        <img class="me-img" src={player} alt="" />
        {#each my_cards as card (card.index)}
            <div
                class="my-card"
                in:receive={{ key: card.index }}
                out:send={{ key: card.index }}
                animate:flip
            >
                <Card number={card.number} hidden={card.hidden} />
            </div>
        {/each}
    </div>

    <div class="opponent">
        <img class="opponent-img" src={player} alt="" />
        {#each opponent_cards as card (card.index)}
            <div
                class="opponent-card"
                in:receive={{ key: card.index }}
                out:send={{ key: card.index }}
                animate:flip
            >
                <Card number={card.number} hidden={card.hidden} />
            </div>
        {/each}
    </div>
</div>

<style>
    .game-table {
        display: flex;
        flex-direction: row;
        width: 1000px;
        height: 400px;
        background-color: #4aad4a;
        border-radius: 150px;
        border: 15px solid #a95555;
        position: relative;
        top: 100px;
        &:before {
            content: "";
            border: 7.5px solid rgba(0, 0, 0, 0.1);
            display: block;
            width: 1015px;
            height: 415px;
            border-radius: 150px;
            position: absolute;
            top: -15px;
            left: -15px;
        }
        &:after {
            content: "";
            border: 7px solid rgba(0, 0, 0, 0.1);
            display: block;
            width: 985px;
            height: 385px;
            border-radius: 130px;
            position: absolute;
            top: 0;
            left: 0;
        }
    }

    .deck {
        border: 5px solid #63c763;
        height: 100px;
        width: 340px;
        position: absolute;
        border-radius: 10px;
        padding: 10px;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    .me {
        position: absolute;
        bottom: -160px;
        left: 420px;
        width: 160px;
        height: 160px;
    }

    .me-img {
        width: 100%;
        height: 100%;
        transform: rotate(180deg);
    }

    .my-card {
        position: absolute;
        top: 115px;
        left: 53px;
    }

    .opponent {
        position: absolute;
        top: -160px;
        left: 420px;
        width: 160px;
        height: 160px;
    }

    .opponent-img {
        width: 100%;
        height: 100%;
    }

    .opponent-card {
        position: absolute;
        top: -30px;
        left: 53px;
    }
</style>
