camelCaseItems = function(items){
     for (i of [...items[]]){
         console.log(i);
         item = items.split("_");
         for (const n of item){
            items.push(n[1].toUpperCase());
          }
         console.log("items = ", items);
    }
     }
}

camelCaseItems(['sd_fa', 's_Hs', 'ds_ff_f']);



document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function(){
    const text = document.querySelecto('textarea').value;
    const rows = text.split('\n');
    console.log(rows);
    console.log(text);

    for (const [i, row] of rows.entries()){
        row.toLowerCase().trim().split('_');
        const output = `${first}${second.replace(second[0].toUpperCase())}`;
        console.log(output);
        console.log(`${output.padEnd(20)}`);
    }
})