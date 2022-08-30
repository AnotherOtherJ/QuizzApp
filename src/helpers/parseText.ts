const parseText = (txt: string) => new DOMParser().parseFromString(txt, "text/html").body.innerText;

export default parseText;
