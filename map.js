let zip = new Map([["Tom", "131-8634"], ["Huck", "556-0002"]]);

zip.set("Hyojae", "123-4567");

zip.forEach((key, value) => {
    console.log("key: " + key + ", value: " + value);
})


let iter = zip.entries();

for (entry in iter)
{
    console.log("entry: " + entry);
}