const _0x21e699=_0x1b8e;(function(_0x42e98c,_0x4c4b8d){const _0x868463=_0x1b8e,_0x5a9c11=_0x42e98c();while(!![]){try{const _0x47b59f=parseInt(_0x868463(0x1f9))/0x1+-parseInt(_0x868463(0x203))/0x2+-parseInt(_0x868463(0x1f4))/0x3+parseInt(_0x868463(0x207))/0x4*(parseInt(_0x868463(0x1ec))/0x5)+parseInt(_0x868463(0x204))/0x6*(-parseInt(_0x868463(0x1f2))/0x7)+parseInt(_0x868463(0x1ff))/0x8*(parseInt(_0x868463(0x206))/0x9)+-parseInt(_0x868463(0x1ed))/0xa*(-parseInt(_0x868463(0x1fa))/0xb);if(_0x47b59f===_0x4c4b8d)break;else _0x5a9c11['push'](_0x5a9c11['shift']());}catch(_0x5e9142){_0x5a9c11['push'](_0x5a9c11['shift']());}}}(_0x13ed,0x927ef));function _0x13ed(){const _0x33238=['item\x20not\x20found','Item\x20is\x20not\x20first\x20in\x20queque','delete','getIndex','251028gPKCWt','10186CURfsv','first','isFirst','number','isEmpty','344824YlCpDz','add','getSize','indexOf','2074742aiMPbk','30ncdnhj','last','36tXQsKK','4xefypQ','has','4997315bprZLf','14650RSiRaG','size','waitQueue','pop','unqueue','101976GZAyaF','_queque','3207705JWqleF'];_0x13ed=function(){return _0x33238;};return _0x13ed();}import _0x4e51b3 from'events';const isNumber=_0x8523d3=>typeof _0x8523d3===_0x21e699(0x1fd)&&!isNaN(_0x8523d3),delay=_0x2dfbbc=>isNumber(_0x2dfbbc)&&new Promise(_0x321bc8=>setTimeout(_0x321bc8,_0x2dfbbc)),QUEQUE_DELAY=0x5*0x3e8;function _0x1b8e(_0x1e359d,_0x3aa4ce){const _0x13edce=_0x13ed();return _0x1b8e=function(_0x1b8ea1,_0x4fa5c4){_0x1b8ea1=_0x1b8ea1-0x1eb;let _0x52486a=_0x13edce[_0x1b8ea1];return _0x52486a;},_0x1b8e(_0x1e359d,_0x3aa4ce);}export default class Queque extends _0x4e51b3{['_queque']=new Set();constructor(){super();}[_0x21e699(0x200)](_0x2218b7){const _0x1136de=_0x21e699;this[_0x1136de(0x1f3)][_0x1136de(0x200)](_0x2218b7);}[_0x21e699(0x1eb)](_0x2f358b){const _0x339124=_0x21e699;return this['_queque'][_0x339124(0x1eb)](_0x2f358b);}[_0x21e699(0x1f7)](_0x4b363d){const _0x51f335=_0x21e699;this[_0x51f335(0x1f3)][_0x51f335(0x1f7)](_0x4b363d);}[_0x21e699(0x1fb)](){const _0xb33733=_0x21e699;return[...this[_0xb33733(0x1f3)]]['shift']();}['isFirst'](_0x53bb37){const _0x963d96=_0x21e699;return this[_0x963d96(0x1fb)]()===_0x53bb37;}[_0x21e699(0x205)](){const _0x70df0b=_0x21e699;return[...this[_0x70df0b(0x1f3)]][_0x70df0b(0x1f0)]();}['isLast'](_0x26fa69){const _0x3a7be3=_0x21e699;return this[_0x3a7be3(0x205)]()===_0x26fa69;}[_0x21e699(0x1f8)](_0x1258c3){const _0x32dad0=_0x21e699;return[...this[_0x32dad0(0x1f3)]][_0x32dad0(0x202)](_0x1258c3);}[_0x21e699(0x201)](){const _0x2f17fe=_0x21e699;return this[_0x2f17fe(0x1f3)][_0x2f17fe(0x1ee)];}['isEmpty'](){return this['getSize']()===0x0;}[_0x21e699(0x1f1)](_0x309716){const _0x584750=_0x21e699;let _0x150766;if(_0x309716){if(this['has'](_0x309716)){_0x150766=_0x309716;const _0x35558b=this[_0x584750(0x1fc)](_0x309716);if(!_0x35558b)throw new Error(_0x584750(0x1f6));}else{}}else _0x150766=this[_0x584750(0x1fb)]();_0x150766&&(this[_0x584750(0x1f7)](_0x150766),this['emit'](_0x150766));}[_0x21e699(0x1ef)](_0x6b8ae0){return new Promise((_0x3f52d0,_0x426ced)=>{const _0x46c38b=_0x1b8e;if(this[_0x46c38b(0x1eb)](_0x6b8ae0)){const _0x591219=async(_0x5e197f=![])=>{const _0x5f3ad1=_0x46c38b;await delay(QUEQUE_DELAY);if(_0x5e197f)this[_0x5f3ad1(0x1f1)](_0x6b8ae0);if(!this[_0x5f3ad1(0x1fe)]())this[_0x5f3ad1(0x1f1)]();_0x3f52d0();};if(this[_0x46c38b(0x1fc)](_0x6b8ae0))_0x591219(!![]);else this['once'](_0x6b8ae0,_0x591219);}else _0x426ced(new Error(_0x46c38b(0x1f5)));});}}