const getBlockNumber = async () => {
    let blockheight = await provider.getBlockNumber();
    console.log(blockheight);
    document.getElementById("blockheight").innerHTML = "blockheight: " + blockheight;
}