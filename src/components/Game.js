export const Game = () => {
    const startGame = (ref) => {
        let ctx = ref.getContext('2d')

        drawCircle(ctx)
    }

    const drawCircle = (ctx) => {
        ctx.fillRect(1, 1, 5, 5)
    }

    const canvas = <canvas ref={(e) => startGame(e)} id="GameCanvas"></canvas>

    return (
        <div id="GameContainer">
            {canvas}
        </div>
    )
}