const pickupLines = [
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "Do you have a map? Because I just got lost in your eyes.",
    "Is there an airport nearby or is it my heart taking off?",
    "Are you an interior decorator? Because when I saw you, the entire room became beautiful.",
    "Do you believe in love at first sight, or should I walk by again?",
    "I hope you know CPR, because you just took my breath away!",
    "So, aside from taking my breath away, what do you do for a living?",
    "I ought to complain to Spotify for you not being named this week’s hottest single.",
    " Are you a parking ticket? ‘Cause you’ve got ‘fine’ written all over you.",
    "Your eyes are like the ocean; I could swim in them all day.",
    "When I look in your eyes, I see a very kind soul.",
    "If you were a vegetable, you’d be a ‘cute-cumber.",
    "Do you happen to have a Band-Aid? ‘Cause I scraped my knees falling for you.",
    "I never believed in love at first sight, but that was before I saw you.",
    "I didn’t know what I wanted in a woman until I saw you",
    "I was wondering if you could tell me: If you’re here, who’s running Heaven?",
    "No wonder the sky is gray (or dark, if at night)—all the color is in your eyes.",
    "You’ve got everything I’ve been searching for, and believe me—I’ve been looking a long time.",
    "You’re like a fine wine. The more of you I drink in, the better I feel",

];

const btn = document.getElementById('generate-btn');
const pickupLine = document.getElementById('pickup-line');

btn.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * pickupLines.length);
    pickupLine.textContent = pickupLines[randomIndex];
});