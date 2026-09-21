import json

# Full mapping for all 209 unique words to clean Roman Hinglish
WORD_MAP = {
    'अंदर': 'andar',
    'अंविसेशन': 'conversation',
    'अगर': 'agar',
    'अपने': 'apne',
    'अभी': 'abhi',
    'आ': 'aa',
    'आई': 'AI',
    'आओ': 'aao',
    'आग': 'aankhein',
    'आगे': 'aage',
    'आज': 'aaj',
    'आप': 'aap',
    'आपने': 'aapne',
    'आफ': 'after',
    'आया': 'AI',
    'इतने': 'itne',
    'इन': 'in',
    'इस': 'is',
    'इसका': 'iska',
    'इसको': 'isko',
    'इसलिए': 'isliye',
    'उन्हें': 'unhe',
    'उसे': 'usme',
    'एंड': 'and',
    'एक': 'ek',
    'एक्चुली': 'actually',
    'एडिजेंट': 'A to Z',
    'एयर': 'AI',
    'एलिवेंट': 'relevant',
    'ऑटोमेशन': 'automation',
    'ऑफ': 'of',
    'और': 'aur',
    'कर': 'kar',
    'करके': 'karke',
    'करना': 'karna',
    'करने': 'karne',
    'करें': 'karein',
    'का': 'ka',
    'काम': 'kaam',
    'कि': 'ki',
    'किया': 'kiya',
    'की': 'ki',
    'कुछ': 'kuch',
    'के': 'ke',
    'केल': 'skill',
    'को': 'ko',
    'कोई': 'koi',
    'क्या': 'kya',
    'खतम': 'khatam',
    'खोल': 'khol',
    'गूगल': 'Google',
    'चक्कर': 'chakkar',
    'चाहिए': 'chahiye',
    'चीज': 'cheez',
    'चीजें': 'cheezein',
    'जरूर': 'zaroor',
    'जा': 'jaa',
    'जाएंगे': 'jayenge',
    'जाएगी': 'jayegi',
    'जाओगे': 'jaoge',
    'जाके': 'jaake',
    'जिसके': 'jiske',
    'जिसमें': 'jisme',
    'जो': 'jo',
    'ज्यादा': 'zyada',
    'टाप': 'happens',
    'टू': 'to',
    'टेक्नोलॉजी': 'technology',
    'टो': 'no',
    'डिस्कस': 'discuss',
    'डेवलपर': 'developer',
    'तब': 'tab',
    'तरह': 'tarah',
    'तुझे': 'tujhe',
    'तुम': 'tum',
    'तो': 'toh',
    'था': 'tha',
    'थे': 'the',
    'दिमाग': 'dimaag',
    'दुनिया': 'duniya',
    'दूँगा': 'dunga',
    'देख': 'dekh',
    'देखें': 'dekhein',
    'देर': 'there',
    'दो': 'do',
    'ध्यान': 'dhyan',
    'नहीं': 'nahi',
    'निकल': 'nikal',
    'पता': 'pata',
    'पर': 'par',
    'पहले': 'pehle',
    'पागल': 'pagal',
    'पारामेटर्स': 'parameters',
    'पारें': 'payen',
    'पार्ट': 'part',
    'प्लीज': 'please',
    'फ्रॉम': 'from',
    'बट': 'but',
    'बड़ी': 'badi',
    'बना': 'bana',
    'बने': 'bane',
    'बनो': 'bano',
    'बस': 'bas',
    'बहुत': 'bohot',
    'बारे': 'baare',
    'बिकाम': 'become',
    'बी': 'be',
    'बैठी': 'baithi',
    'भाई': 'Bhai',
    'भी': 'bhi',
    'मत': 'mat',
    'मतलब': 'matlab',
    'माटर': 'matter',
    'मार्केट': 'market',
    'मूफ': 'move',
    'में': 'mein',
    'मेरे': 'mere',
    'मैं': 'main',
    'यह': 'ye',
    'यार': 'yaar',
    'यू': 'you',
    'ये': 'ye',
    'येस्टरेटे': 'yesterday',
    'रहा': 'raha',
    'रही': 'rahi',
    'रहे': 'rahe',
    'रिलेवेंट': 'relevant',
    'लिए': 'liye',
    'लिख': 'make',
    'ली': 'li',
    'ले': 'le',
    'लेकिन': 'lekin',
    'लेगी': 'legi',
    'लेना': 'lena',
    'लॉजिकल': 'logical',
    'लॉन': 'long',
    'लोग': 'log',
    'लोगों': 'logon',
    'वरना': 'warna',
    'वह': 'what',
    'वाइटवाश': 'whitewash',
    'वाला': 'wala',
    'विच': 'which',
    'विल': 'will',
    'वीडियो': 'video',
    'व्हाट': 'what',
    'शुरू': 'sure',
    'शेयर': 'share',
    'शोर्टली': 'shortly',
    'सारी': 'saari',
    'सारे': 'saare',
    'सुन': 'sun',
    'से': 'se',
    'सेट': 'set',
    'सेव': 'SAVE',
    'स्किप': 'skip',
    'हम': 'hum',
    'हमने': 'humne',
    'हमारा': 'hamara',
    'ही': 'hi',
    'हुई': 'hui',
    'हूँ': 'hoon',
    'हूं': 'hoon',
    'है': 'hai',
    'हैं': 'hain',
    'हो': 'ho',
    'CodeBetto': 'CodeBaithak'
}

def clean_word(w):
    clean = w.strip(' .,!?:;-"\'()')
    if clean in WORD_MAP:
        return WORD_MAP[clean]
    # Check lowercase
    if clean.lower() in WORD_MAP:
        return WORD_MAP[clean.lower()]
    return clean

def main():
    with open('/tmp/transcript_raw.json', 'r') as f:
        data = json.load(f)

    raw_words = data.get('words', [])
    processed_words = []

    for item in raw_words:
        w_text = item['word'].strip()
        start_ms = int(item['start'] * 1000)
        end_ms = int(item['end'] * 1000)
        hinglish = clean_word(w_text)
        processed_words.append({
            'word': hinglish,
            'startMs': start_ms,
            'endMs': end_ms
        })

    # Group into phrases of 3 to 5 words
    phrases = []
    current_phrase = []

    for w in processed_words:
        if not current_phrase:
            current_phrase.append(w)
            continue

        prev_w = current_phrase[-1]
        pause = w['startMs'] - prev_w['endMs']
        word_count = len(current_phrase)

        # Break on natural pauses or phrase length
        should_split = False
        if pause > 400:
            should_split = True
        elif word_count >= 5:
            should_split = True
        elif word_count >= 3 and w['word'].lower() in ['bhai', 'yesterday', 'what', 'iska', 'dhyan', 'part', 'please', 'save']:
            should_split = True

        if should_split:
            p_text = " ".join([x['word'] for x in current_phrase])
            phrases.append({
                'text': p_text,
                'startMs': current_phrase[0]['startMs'],
                'endMs': current_phrase[-1]['endMs'] + 80,
                'words': current_phrase
            })
            current_phrase = [w]
        else:
            current_phrase.append(w)

    if current_phrase:
        p_text = " ".join([x['word'] for x in current_phrase])
        phrases.append({
            'text': p_text,
            'startMs': current_phrase[0]['startMs'],
            'endMs': current_phrase[-1]['endMs'] + 80,
            'words': current_phrase
        })

    out_path = '/root/talking-head-remotion/public/captions.json'
    with open(out_path, 'w') as f:
        json.dump(phrases, f, indent=2)

    print(f"Generated {len(phrases)} phrases.")
    
    # Check for any remaining non-ascii characters
    non_ascii = []
    for p in phrases:
        for c in p['text']:
            if ord(c) > 127:
                non_ascii.append(c)
    if non_ascii:
        print("WARNING: Non-ASCII characters detected:", set(non_ascii))
    else:
        print("SUCCESS: 100% clean Roman Hinglish, zero Devanagari!")

if __name__ == '__main__':
    main()
