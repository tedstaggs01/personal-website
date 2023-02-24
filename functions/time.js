function updateTime() {
    const now = new Date();
    const localTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const utcHours = now.getUTCHours();
    const utcMinutes = now.getUTCMinutes();
    const utcTime = `${utcHours.toString().padStart(2, '0')}:${utcMinutes.toString().padStart(2, '0')}`;
    document.getElementById('lmt').innerHTML = localTime;
    document.getElementById('utc').innerHTML = utcTime;
  }
  
  updateTime();
  setInterval(updateTime, 1000); 
  
