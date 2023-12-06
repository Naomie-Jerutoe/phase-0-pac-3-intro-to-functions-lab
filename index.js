function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string){
  const spy = string.toUpperCase();
  console.log(spy);
}
logShout('hello');

function logWhisper(string){
  const spy = string.toLowerCase();
  console.log(spy);
}
logWhisper('HELLO');

function sayHiToHeadphonedRoommate(string){
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  }
  if (string === string.toUpperCase()) {
    return "YES INDEED!";
  }
  if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}
