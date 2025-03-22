let lastTime = 0; // Tracks the last time a paw print was created

document.addEventListener('mousemove', (e) => {
  const currentTime = Date.now();

  // Throttle: Ensure paw prints only appear every x ms
  if (currentTime - lastTime >= 200) { 
    const pawPrint = document.createElement('div');
    pawPrint.classList.add('paw-print');

    // Dynamically assign the correct PNG for each page
    if (window.location.pathname.includes('memorial.html')) {
        pawPrint.classList.add('memorial'); // White paw print
    } else {
        pawPrint.classList.add('home'); // Pink paw print
    }

    // Set the paw print position
    pawPrint.style.left = `${e.pageX}px`;
    pawPrint.style.top = `${e.pageY}px`;
    document.body.appendChild(pawPrint);

    // Remove the paw print after animation
    setTimeout(() => {
      pawPrint.remove();
    }, 2000);

    // Update the last time a paw print was created
    lastTime = currentTime;
  }
});