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
    var sequence = "";
    var inSequence = false;
    for (var i = 0; i < short.length; i++) {
        for (var j = 0; j < long.length; j++) {
            if (short[i] == ' ' && long[j] == ' ') {
                // don't match spacess, advance both i,j
                i++, j++;
            }

            if (short[i] == long[j]) {
                if (!inSequence) {
                    // start of a sequence
                    sequence += long[j];
                    inSequence = true;
                    i++;
                } else {
                    // update current sequence
                    sequence += long[j];
                    i++;
                }   
            } else {
                if (inSequence) {
                    // end of a sequence
                    if (sequence.length > 1) {
                        sequence = sequence.trim();
                        sequences.push(sequence);
                    } else {
                        // don't allow sequence of 1, go back to look again
                        i--;
                    }
                    inSequence = false;
                    sequence = "";
                } 
            }
        }
    }

    console.log(sequences);
}

findCommonSubsequence("liza sex glass feet two car plane is this a cool experience to have been in", 
"elizabeth is very sexy and hot with her glasses watching tv and looking at her iphone while i work on this program to find the longest subsequences in two strings and I now have a working solution that I would like to put through a more rigorous test by using a much longer string");

var s1 = 'His name was Tarketios. Much more than that, Larth could not tell, for the stranger spoke a language which Larth did not recognize, in which each word seemed as long and convoluted as the man’s name. Understanding the deer had been easier than understanding the strange noises uttered by this man and his two companions! Even so, they seemed friendly, and the three of them presented no threat to the more numerous salt traders. Tarketios and his two older companions were skilled metalworkers from a region some two hundred miles to the north, where the hills were rich with iron, copper, and lead. They had been on a trading journey to the south and were returning home. Just as the river path carried Larth’s people from the seashore to the hills, so another path, perpendicular to the river, traversed the long coastal plain. Because the island provided an easy place to ford the river, it was here that the two paths intersected. On this occasion, the salt traders and the metal traders happened to arrive at the island on the same day. Now they met for the first time. The two groups made separate camps at opposite ends of the island. As a gesture of friendship, speaking with his hands, Larth invited Tarketios and the others to share the venison that night. As the hosts and their guests feasted around the roasting fire, Tarketios tried to explain something of his craft. Firelight glittered in Lara’s eyes as she watched Tarketios point at the flames and mime the act of hammering. Firelight danced across the flexing muscles of his arms and shoulders. When he smiled at her, his grin was like a boast. She had never seen teeth so white and so perfect.'
var s2 = 'Amid the dazzling brightness, he perceived a thing that levitated above the flames. It was a masculine member, disembodied but nonetheless rampant and upright. It bore wings, like a bird, and hovered in midair. Though it seemed to be made of flesh, it was impervious to the flames. Larth had seen the winged phallus before, always in such circumstances, when he stared at a fire and entered a dream state. He had even given it a name, or more precisely, the thing had planted its name in his mind: Fascinus. Fascinus was not like the numina that animated trees, stones, or rivers. Those numina existed without names. Each was bound to the object in which it resided, and there was little to differentiate one from another. When such numina spoke, they could not always be trusted. Sometimes they were friendly, but at other times they were mischievous or even hostile. Fascinus was different. It was unique. It existed in and of itself, without beginning or end. Clearly, from its form, it had something to do with life and the origin of life, yet it seemed to come from a place beyond this world, slipping for a few moments through a breach opened by the heat of the dancing flames. An appearance by Fascinus was always significant. The winged phallus never appeared without giving Larth an answer to a dilemma that had been troubling him, or planting an important new thought in his mind. The guidance given to him by Fascinus had never led Larth astray. Elsewhere, in distant lands—Greece, Israel, Egypt—men and women worshiped gods and goddesses. Those people made images of their gods, told stories about them, and worshiped them in temples. Larth had never met such people. He had never even heard of the lands where they lived, and he had never encountered or conceived of a god. The very concept of a deity such as those other men worshiped was unknown to Larth, but the closest thing to a god in his imagination and experience was Fascinus. With a start, he blinked again. The flames had died. In place of intolerable brightness there was only the darkness of a warm summer night lit by the faintest sliver of a moon. The air on his face was no longer hot but fresh and cool. Fascinus had vanished—but not without planting a thought in Larth’s mind. He hurried to the leafy bower beside the river where Lara liked to sleep, thinking to himself, It must be made so, because Fascinus says it must! He knelt beside her, but there was no need to wake her. She was already awake. “Papa? What is it?” “Go to him!” She did not need to ask for an explanation. It was what she had been yearning to do, lying restless and eager in the dark. “Are you sure, Papa?” “Fascinus . . . ,” He did not finish the thought, but she understood. She had never seen Fascinus, but he had told her about it. Many times in the past, Fascinus had given guidance to her father. Now, once again, Fascinus had made its will known. The darkness did not deter her. She knew every twist and turn of every path on the little island. When she came to the metal trader’s camp, she found Tarketios lying in a leafy nook secluded from the others; she recognized him by his brawny silhouette. He was awake and waiting, just as she had been lying awake, waiting, when her father came to her. At her approach, Tarketios rose onto his elbows. He spoke her name in a whisper. There was a quiver of something like desperation in his voice; his neediness made her smile. She sighed and lowered herself beside him. By the faint moonlight, she saw that he wore an amulet of some sort, suspended from a strap of leather around his neck. Nestled amid the hair on his chest, the bit of shapeless metal seemed to capture and concentrate the faint moonlight, casting back a radiance brighter than the moon itself. His arms—the arms she had so admired earlier—reached out and closed around her in a surprisingly gentle embrace. His body was as warm and naked as her own, but much bigger and much harder. She wondered if Fascinus was with them in the darkness, for she seemed to feel the beating of wings between their legs as she was entered by the thing that gave origin to life.';

findCommonSubsequence(s1, s2);