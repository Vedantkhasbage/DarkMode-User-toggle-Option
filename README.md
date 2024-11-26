creating Dark Mode on user Toggle Button
1]put class="dark" in top of html tag
2]put darkmode:"selector" in tailwind.config file so that we can do it on user preference
3] apply dark: ""  option where you want
4]button document.querySelector("html").classList.toggle("dark") 