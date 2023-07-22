
        let chance = true
        let redWinCount = 0
        let blueWinCount = 0
        let drawCount = 0
        let TotalCount = 0
        let p1;
        let p2

        function startGame() {
            p1 = document.getElementById("player1")
            p2 = document.getElementById("player2")
            console.log(p1.value,p2.value)
            if (p1.value == "") {
                p1.classList.add("is-invalid")
            }
            if (p2.value == "") {
                p2.classList.add("is-invalid")
            }
            if (p1.value && p2.value) {
                document.getElementById("start").classList.remove("d-none")
                document.getElementById("gameCard").classList.remove("d-none")
                document.getElementById("playerCard").classList.add("d-none")

                document.getElementById("player1Name").innerHTML = p1.value
                document.getElementById("player2Name").innerHTML = p2.value
            }

        }


        function game(id) {
            console.log("game called",id)
            let box = document.getElementById(id)
            console.log("the element is",box)
            if (!(box.classList.contains("bg-danger") || box.classList.contains("bg-primary"))) {
                chance
                    ? box.classList.add("bg-danger")
                    : box.classList.add("bg-primary")
                chance = !chance
            }
            checkWinner(box)


        }
        function checkWinner(box) {
            let redBox = []
            let blueBox = []
            let fill = []
            for (let i = 0; i < 9; i++) {
                redBox.push(document.getElementById(`box${i + 1}`).classList.contains("bg-danger"))
                blueBox.push(document.getElementById(`box${i + 1}`).classList.contains("bg-primary"))
                if (document.getElementById(`box${i + 1}`).classList.contains("bg-primary") || document.getElementById(`box${i + 1}`).classList.contains("bg-danger")) {
                    fill.push("hello")
                }
            }
            switch (true) {
                case redBox[0] && redBox[1] && redBox[2]: displayResult("red"); break;
                case redBox[3] && redBox[4] && redBox[5]: displayResult("red"); break;
                case redBox[6] && redBox[7] && redBox[8]: displayResult("red"); break;
                case redBox[0] && redBox[3] && redBox[6]: displayResult("red"); break;
                case redBox[1] && redBox[4] && redBox[7]: displayResult("red"); break;
                case redBox[2] && redBox[5] && redBox[8]: displayResult("red"); break;
                case redBox[0] && redBox[4] && redBox[8]: displayResult("red"); break;
                case redBox[2] && redBox[4] && redBox[6]: displayResult("red"); break;

                case blueBox[0] && blueBox[1] && blueBox[2]: displayResult("blue"); break;
                case blueBox[3] && blueBox[4] && blueBox[5]: displayResult("blue"); break;
                case blueBox[6] && blueBox[7] && blueBox[8]: displayResult("blue"); break;
                case blueBox[0] && blueBox[3] && blueBox[6]: displayResult("blue"); break;
                case blueBox[1] && blueBox[4] && blueBox[7]: displayResult("blue"); break;
                case blueBox[2] && blueBox[5] && blueBox[8]: displayResult("blue"); break;
                case blueBox[0] && blueBox[4] && blueBox[8]: displayResult("blue"); break;
                case blueBox[2] && blueBox[4] && blueBox[6]: displayResult("blue"); break;
                default: fill.length === 9 && displayResult("draw")
            }
        }

        function resetGame() {
            for (let i = 0; i < 9; i++) {
                document.getElementById(`box${i + 1}`).classList.remove("bg-danger")
                document.getElementById(`box${i + 1}`).classList.remove("bg-primary")
            }
            chance = true

        }

        function displayResult(arg) {
            let classes = ""
            let message = ""

            // handle alert classes , wincount increement and mesage to display - start
            switch (arg) {
                case "red": redWinCount++; classes = "alert alert-danger"; message = `${p1.value} is Winner`; break
                case "blue": blueWinCount++; classes = "alert alert-primary"; message = `${p2.value} is Winner`; break
                case "draw": drawCount++; classes = "alert alert-dark"; message = "Match is Drawn"; break
            }
            // handle alert classes , wincount increement and mesage to display - end


            // console.log( `
            // Red: ${redWinCount}
            // Blue: ${blueWinCount}
            // Draw : ${drawCount }
            // Total : ${drawCount + redWinCount + blueWinCount}
            // `);


            // disply win counts start
            let totalCount = drawCount + redWinCount + blueWinCount
            document.getElementById("redWinCount").innerHTML = redWinCount
            document.getElementById("blueWinCount").innerHTML = blueWinCount
            document.getElementById("drawCount").innerHTML = drawCount
            document.getElementById("totalMatchCount").innerHTML = totalCount
            // display win count end

            // mark 50 exam 50
            // (mark / total) * 100
            console.log("Red", (redWinCount / totalCount) * 100);
            console.log("Blue", (blueWinCount / totalCount) * 100);
            console.log("Draw", (drawCount / totalCount) * 100);

            document.getElementById("redProgress").style.width = `${(redWinCount / totalCount) * 100}%`
            document.getElementById("blueProgress").style.width = `${(blueWinCount / totalCount) * 100}%`
            document.getElementById("drawProgress").style.width = `${(drawCount / totalCount) * 100}%`

            //  feedback Alert start
            document.getElementById("result").innerHTML = `<div class="${classes}">
                <h1> ${message} </h1>
                <hr/>
                🍷🔥🍷
                <hr/>
                <div class="d-flex gap-4 text-center">
                     <div class="spinner-border"> </div>
                     <p>Please Wait, Restarting Game</p>
                    </div>
                
                </div>`
            document.getElementById("gameCard").classList.add("d-none")

            resetGame()
            setTimeout(function () {
                document.getElementById("result").innerHTML = ""
                document.getElementById("gameCard").classList.remove("d-none")
            }, 5000)
        }






