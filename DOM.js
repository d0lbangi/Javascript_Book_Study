/**
 * 문서구조
 */

HTML 이 문서고, 자바스크립트로는 HTML 을 조작할 수 있다
HTML을 조작하려면 문서 객체 모델(DOM)로 표현함으로써 우리는 조작할 수 있는것인데
DOM은 하나하나의 단위가 노드로 되어있고 트리구조로 되어있다.DOM

Node는 수많은 프로퍼티와 메소드(객체의 함수)를 가지고 있다.

document.getElementById()
document.getElementByClassName()
document.getElementByTagName()

documents.querySelector
documents.querySelectorAll("div.note, div.alert");
documents.querySelectorAll("div.hightlighted > p");

const nav = document.querySelector('#nav-access');
nav.querySelectorAll('li')
/**
 * id => #
 * class => .
 * tag Name => 문자열
 */


// class name 을 넣고 빼는 방법


const searchButton = document.querySelector('.gN089b')
searchButton.classList.add('zero-base')
searchButton

searchButton.classList.remove('')

searchButton.classList.contains('zero-base') // true




const linkDirect = document.querySelector('.link_direct')
linkDirect.textContent

linkDirect.textContent = 'ZERO'




const partnerBox = document.querySelector('.partner_box')
const el = document.querySelector('.link_partner')
partnerBox.removeChild(el)

const el2 = document.createElement('div')
el2.textContent = 'NEW'

partnerBox.appendChild(el2)



partnerBox.innerHTML = '<h3 class="title">Zero Base</h3>'
