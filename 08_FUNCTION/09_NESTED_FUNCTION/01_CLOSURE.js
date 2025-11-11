//

function gp() {
    let a = 10;

    function p() {
        let b = 20;

        function child() {
            let c = a + b
            console.log(c);

        }
        child();
    }
    p();
}
gp();