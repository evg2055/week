let week = ['mo', 'tu', 'wed', 'thu', 'fri', 'sat', 'sun'];

for(let i = 0; i < week.length; i++) {
    if(week[i] == 'sat' || week[i] == 'sun') {
   document.write('<div class="weekend">' + week[i] + '</div>');
}
   else { document.write('<div class="weekdays">' + week[i] + '</div>');
}
}