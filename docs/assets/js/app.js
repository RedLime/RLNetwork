/**
 * Set global server variables
 * You may include ports in your server_ip (default is 25565, SRV is supported)
 */
var SERVER_NAME = 'RLNetwork';
var SERVER_IP = 'redlimerl.kro.kr';

getServerStatus = (async () => {
	return await fetch(`https://api.mcsrvstat.us/2/$ {
		SERVER_IP
	}
	`).then(e =>e.json()).catch(e =>console.error(e))
}),

document.getElementById("ip-button").addEventListener("click",() => {
	prompt("서버 주소를 복사하세요:",SERVER_IP)
}),

document.addEventListener("DOMContentLoaded",async () => {
	const e = await getServerStatus(SERVER_IP),t = document.getElementById("server-online-count");
	null !== t && (e && e.players ? t.innerHTML = e.players.online.toLocaleString():(t.innerHTML = "offline",t.classList.add("is-danger"),t.classList.add("is-white"),console.warn("If you're seeing this,your server on "+SERVER_IP+" could not be reached or it did not return valid data.")))
}),

document.addEventListener("DOMContentLoaded",() => {
	const e = document.getElementsByClassName("server-ip");
	Array.from(e).forEach(e => {
		e.innerHTML = SERVER_IP
	}
	)
}),

document.addEventListener("DOMContentLoaded",() => {
	const e = document.getElementsByClassName("server-name");
	Array.from(e).forEach(e => {
		e.innerHTML = SERVER_NAME
	}
	)
}),

document.addEventListener("DOMContentLoaded",() => {
	const e = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);
	e.length>0 && e.forEach(e => {
		e.addEventListener("click",() => {
			const t = e.dataset.target,n = document.getElementById(t);
			e.classList.toggle("is-active"),n.classList.toggle("is-active")
		}
		)
	}
	)
}),

document.addEventListener("DOMContentLoaded",() => {
	const e = document.getElementById("helpModal"),t = document.getElementById("helpModalButton"),n = document.getElementById("closeHelpModal"),s = document.getElementById("closeHelpModal2");
	e && (t.addEventListener("click",() => {
		e.classList.add("is-active")
	}
	),n.addEventListener("click",() => {
		e.classList.remove("is-active")
	}
	),s.addEventListener("click",() => {
		e.classList.remove("is-active")
	}
	))
}),

window.addEventListener("scroll",() => {
	const e = document.getElementById("navbar");
	0 == window.scrollY ? (e.classList.remove("has-shadow","is-white"),e.classList.add("is-transparent")): window.scrollY>= 25 && (e.classList.add("has-shadow","is-white"),e.classList.remove("is-transparent"))
});