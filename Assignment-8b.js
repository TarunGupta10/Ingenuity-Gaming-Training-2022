function copying() {
    var arr1 = [12, 34, 56];
    var arr2 = [];

    arr1.forEach(function (arr) {
        arr2.push(arr);
    });
    console.log("Original Array = " + arr1);
    console.log("Copied Array = " + arr2);
}
copying();