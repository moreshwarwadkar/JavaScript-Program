//

function gp() {
    console.log('This is Grand Parent');

    function p() {
        console.log('This is Parent');
        
        function child() {
            console.log('This is Child');
        }
        child();
    }
    p();
}
gp();