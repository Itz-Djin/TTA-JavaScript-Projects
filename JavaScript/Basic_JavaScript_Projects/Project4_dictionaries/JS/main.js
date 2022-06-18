function practiceFunction() { // Created function "practiceFunction"
    var Computer = { // Created the dictionary "Computer"
        Processor: "Ryzen", // Created KVP  name Processor, Value Ryzen
        Processor: "Intel", // Created KVP name Processor, Value Intel
        graphicsCard: "Geforce GTX 1660TI", // Created KVP name graphicsCard, Value Geforce GTX 1660TI
        RAM: "DDR4", // Created KVP name RAM, Value DDR4
        Fans: 4, // Created KVP name Fans, Value 4
        m2Drive: "970 EVO", // Created KVP name m2Drive, Value 970 EVO
    };
    delete Computer.Processor; // Deleted KVP's with the name Processor
    document.getElementById("Dictionary").innerHTML = Computer.Processor; // Displays the KVP located in the dictonary, in this case is undefined because that KVP was deleted
}

