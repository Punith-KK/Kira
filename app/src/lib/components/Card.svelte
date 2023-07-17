<script>
    export let number;
    export let hidden;
</script>

<div class="flip-card" class:flip-card-open={hidden}>
    <dlv class="flip-card-inner">
        <div class="flip-card-front">
            {#if number === 0}
                <div class="grid-item">
                    <div />
                    <div />
                    <div />
                    <div />
                    <div class="heart">?</div>
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            {:else if number === 1}
                <div class="grid-item">
                    <div class="top-left">
                        A<br />
                        <div style="color:red">♥</div>
                    </div>
                    <div />
                    <div />
                    <div />
                    <div class="heart">♥</div>
                    <div />
                    <div />
                    <div />
                    <div class="bottom-right">
                        A<br />
                        <div style="color:red;">♥</div>
                    </div>
                </div>
            {:else if number === 2}
                <div class="grid-item">
                    <div class="top-right">
                        2<br />
                        <div style="color:red;">♥</div>
                    </div>
                    <div class="heart">♥</div>
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div class="heart">♥</div>
                    <div class="bottom-right">
                        2<br />
                        <div style="color:red;">♥</div>
                    </div>
                </div>
            {:else if number === 3}
                <div class="grid-item">
                    <div class="top-left">
                        3<br />
                        <div style="color:red;">♥</div>
                    </div>
                    <div class="heart">♥</div>
                    <div />
                    <div />
                    <div class="heart">♥</div>
                    <div />
                    <div />
                    <div class="heart">♥</div>
                    <div class="bottom-right">
                        3<br />
                        <div style="color:red;">♥</div>
                    </div>
                </div>
            {:else}
                <div class="grid-item">
                    <div class="top-left">
                        4<br />
                        <div style="color:red;">♥</div>
                    </div>
                    <div class="heart overflow-parent">
                        <div class="overflow-child">♥ ♥</div>
                    </div>
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div class="heart overflow-parent">
                        <div class="overflow-child">♥ ♥</div>
                    </div>
                    <div class="bottom-right">
                        4<br />
                        <div style="color:red;">♥</div>
                    </div>
                </div>
            {/if}
        </div>
        <div class="flip-card-back">
            <div class="grid-item">
                <div />
                <div />
                <div />
                <div />
                <div class="heart">?</div>
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    </dlv>
</div>

<style>
    .flip-card {
        background-color: transparent;
        width: 50px;
        height: 68px;
        perspective: 1000px; /* Remove this if you don't want the 3D effect */
    }

    .flip-card-inner {
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    .flip-card-open .flip-card-inner {
        transform: rotateY(180deg);
    }

    /* Position the front and back side */
    .flip-card-front,
    .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
    }

    .flip-card-back {
        transform: rotateY(180deg);
    }

    .grid-item {
        width: 50px;
        height: 68px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 2fr 1fr;
        grid-gap: 1px;
        background-color: white;
        color: black;
        font-size: 0.5em;
        padding: 2px;
        border-radius: 5%;
        box-shadow: 0px 5px 15px grey;
    }

    .heart {
        text-align: center;
        align-self: center;
        font-size: 2em;
        color: red;
    }

    .top-left {
        padding: 0.1em;
    }

    .bottom-right {
        align-self: end;
        transform: rotate(180deg);
    }

    .overflow-parent {
        overflow: visible;
    }

    .overflow-child {
        width: 200px;
        position: relative;
        left: 50%;
        right: 50%;
        margin-left: -100px;
        margin-right: -100px;
    }
</style>
