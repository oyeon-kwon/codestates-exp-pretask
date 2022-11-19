// image import
import colordentity from '../../../public/img/colordentity.gif'
import git from '../../../public/img/git-command-checkpoint.gif'
import acidrain from '../../../public/img/select-play.gif'
import cotalk from '../../../public/img/cotalk.png'
import misetoktok from '../../../public/img/misetoktok.png';

const portfolio = [{
    title: 'Colordentity',
    image: colordentity,
    desc: 'Google Teachable machine을 활용해 퍼스널 컬러 진단을 도와주는 웹 앱',
    link: 'https://github.com/oyeon-kwon/personal_color/'
}, {
    title: 'Git Command Game',
    image: git,
    desc: 'Git 관련 명령어를 쉽게 학습할 수 있는 게임',
    link: 'https://github.com/oyeon-kwon/git-command-game'
}, {
    title: '산성비',
    image: acidrain,
    desc: '코드를 통해 연습하는 타자 게임',
    link: 'https://github.com/oyeon-kwon/acid-rain'
}, {
    title: 'Redraw와 Reflow',
    image: cotalk,
    desc: '브라우저 렌더링 과정에서 발생하는 Redraw와 Reflow에 대한 유튜브 영상 제작',
    link: 'https://www.youtube.com/watch?v=XoyWzOh3Sy4'
}, {
    title: '미세톡톡',
    image: misetoktok,
    desc: '미세먼지 농도와 날씨를 알려주는 미세톡톡 앱의 Backend 개선 작업'
}]

export default portfolio;