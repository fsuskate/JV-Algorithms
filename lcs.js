function findCommonSubsequence(s1, s2) {
    var short;
    var long;

    if (s1.length > s2.length) {
        short = s2;
        long = s1;
    } else {
        short = s1;
        long = s2;
    }

    var sequences = [];
    var currentSequence = -1;
    var inSequence = false;
    for (var i = 0; i < short.length; i++) {
        for (var j = 0; j < long.length; j++) {
            if (long[j] == short[i]) {
                if (long[j] == " ") {
                    // just advance 
                    j++, i++;
                    if (inSequence) inSequence = false;
                } else if (!inSequence) {
                    // start of a sequence
                    sequences.push("" + long[j]);
                    inSequence = true;
                    currentSequence++;
                    i++;
                } else {
                    // update current sequence
                    sequences[currentSequence] += long[j];
                    i++;
                }   
            } else {
                if (inSequence) {
                    // end of a sequence
                    inSequence = false;
                    i++;
                }
                
            }
        }
    }

    console.log(sequences);
}

findCommonSubsequence("liza sex glass", "elizabeth is very sexy and hot with her glasses");