export function hitDrums(){
    document.addEventListener('keydown', getTheKey);

    function getTheKey(e){
        console.log(e.code);
    }

}