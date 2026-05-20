// Color Button: #006c5c


//Canvas login
const loginbtn = document.getElementById("link-saml");
if (loginbtn) {
  loginbtn.style.backgroundColor = "#006c5c";
  const img = document.querySelector('header img');
  img.src = "https://i.imgur.com/CjzH3dN.png";
}


//Chalmers.se
function swapLogo() {
  const svg = document.querySelector('a[aria-label="To frontpage"] svg, a[aria-label="Till startsidan"] svg');
  if (svg) {
    const img = document.createElement('img');
    img.src = "https://i.imgur.com/CjzH3dN.png";
    img.alt = 'Logo';
    img.style.height = '43px';
    img.style.width = '161px';
    svg.parentNode.replaceChild(img, svg);
  }
}

swapLogo();

const observer = new MutationObserver(() => {
  const svg = document.querySelector('a[aria-label="To frontpage"] svg, a[aria-label="Till startsidan"] svg');
  if (svg) swapLogo();
});

observer.observe(document.body, { childList: true, subtree: true });

//Microsoft login
const logo = document.getElementById('bannerLogo');
if (logo) {
  logo.src = "https://i.imgur.com/CjzH3dN.png";
}