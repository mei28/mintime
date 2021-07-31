const clock = () => {
  // 現在の日時情報を取得
  const d = new Date();

  // 情報の切り分け
  let year = d.getFullYear();
  let month = d.getMonth();
  let date = d.getDate();
  let weekNum = getWeeksNum(year, month);
  let youbiNum = d.getDay();
  const youbis = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
  const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Sep"]
  month = monthNames[month];
  let youbi = youbis[youbiNum]
  let hour = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();

  // 1桁の時は0埋めする
  // month = month < 10 ? "0" + month: month;
  date = date < 10 ? "0" + date: date;
  hour = hour < 10 ? "0" + hour: hour;
  min = min < 10 ? "0" + min: min;
  sec = sec < 10 ? "0" + sec: sec;

  // 表示文字列の作成

  // let today = `${year}/${month}/${date} ${youbi}`;
  let today = `${month} ${date} (${youbi}), ${year}, week ${weekNum}`;
  let time = `${hour}:${min}:${sec}`;

  // 表示文字列を出力
  document.querySelector(".clock-date").innerText = today;
  document.querySelector(".clock-time").innerText = time;
};

// 1000ms=1secごとにclock関数を呼ぶ
setInterval(clock, 1000);

function getWeeksNum(year, month){
  var daysNum = 32 - new Date(year, month, 32).getDate();
  var fDay0 = new Date(year, month, 1).getDay();
  var fDay = fDay0 ? (fDay0 - 1) : 6;
  var weeksNum = Math.ceil((daysNum + fDay) / 7);
  return weeksNum;
}
