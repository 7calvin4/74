document.addEventListener('DOMContentLoaded', function () {
    // Intro animation
    document.body.classList.add('intro-visible');

    // Socials functionality
    const githubLink = document.getElementById('github');
    const youtubeLink = document.getElementById('youtube');
    const discordLink = document.getElementById('discord');

    githubLink.addEventListener('click', function () {
        openSocialLink('https://github.com/7calvin4');
    });

    youtubeLink.addEventListener('click', function () {
        openSocialLink('https://www.youtube.com/channel/UC5Uvu9qMdZhJ3WuasvteeoA');
    });

    discordLink.addEventListener('click', function () {
        openSocialLink('https://discord.gg/bwa4FPxv2D');
    });
});

function openSocialLink(url) {
    // Open the social link in a new tab
    window.open(url, '_blank');
}
