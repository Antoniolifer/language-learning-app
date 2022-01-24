
const quiz = {
    katakana: {
        questions: ['ア','イ','ウ','エ','オ','カ','キ','ク','ケ','コ','サ','シ','ス','セ','ソ','タ','チ','ツ','テ','ト','ナ','ニ','ヌ','ネ','ノ','ハ','ヒ','フ','ヘ','ホ','マ','ミ','ム','メ','モ','ヤ','ユ','ヨ','ラ','リ','ル','レ','ロ','ワ','ヲ','ン'],
        answers: ['a','i','u','e','o','ka','ki','ku','ke','ko','sa','shi','su','se','so','ta','chi','tsu','te','to','na','ni','nu','ne','no','ha','hi','fu','he','ho','ma','mi','mu','me','mo','ya','yu','yo','ra','ri','ru','re','ro','wa','wo','n']
    },
    katakana_muddied: {
        questions: ["ガ","ギ","グ","ゲ","ゴ","ザ","ジ","ズ","ゼ","ゾ","ダ","ジ","ヅ","デ","ド","バ","ビ","ブ","ベ","ボ","パ","ピ","プ","ペ","ポ"],
        answers: ['ga','gi','gu','ge','go','za','ji','zu','ze','zo','da','ji','dzu','de','do','ba','bi','bu','be','bo','pa','pi','pu','pe','po']
    },
    hiragana: {
        questions: ['あ','い','う','え','お','か','き','く','け','こ','さ','し','す','せ','そ','た','ち','つ','て','と','な','に','ぬ','ね','の','は','ひ','ふ','へ','ほ','ま','み','む','め','も','や','ゆ','よ','ら','り','る','れ','ろ','わ','を','ん'],
        answers: ['a','i','u','e','o','ka','ki','ku','ke','ko','sa','shi','su','se','so','ta','chi','tsu','te','to','na','ni','nu','ne','no','ha','hi','fu','he','ho','ma','mi','mu','me','mo','ya','yu','yo','ra','ri','ru','re','ro','wa','wo','n']
    },
    hiragana_muddied: {
        questions: ['が','ぎ','ぐ','げ','ご','ざ','じ','ず','ぜ','ぞ','だ','ぢ','づ','で','ど','ば','び','ぶ','べ','ぼ','ぱ','ぴ','ぷ','ぺ','ぽ'],
        answers: ['ga','gi','gu','ge','go','za','ji','zu','ze','zo','da','ji','dzu','de','do','ba','bi','bu','be','bo','pa','pi','pu','pe','po']
    }

}
function randomiseQuiz(questions, answers, max){
    let randomised_questions = [];
    let randomised_answers = [];

    while(randomised_questions.length !== max){
		const random = Math.floor(Math.random() * questions.length);
		if(!randomised_questions.includes(questions[random])) {
			randomised_questions.push(questions[random]);
			randomised_answers.push(answers[random]);
		}
	}
    return {questions: randomised_questions, answers: randomised_answers};
}


export default function getQuiz(exercise, randomise = false){
    if(randomise){
        return randomiseQuiz(quiz[exercise].questions,quiz[exercise].answers, quiz[exercise].questions.length);
    }
    return quiz[exercise];

}



/*
let randomisedQuiz = randomiseQuiz(quiz.katakana.questions,quiz.katakana.answers, 46);
console.log(randomisedQuiz);
*/