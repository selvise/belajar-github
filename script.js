// ===============================
// ELEMENTS
// ===============================

const opening = document.getElementById("opening");
const chatScreen = document.getElementById("chatScreen");
const openChat = document.getElementById("openChat");

const chat = document.getElementById("chat");
const choices = document.querySelector(".choices");


// ===============================
// OPEN CHAT
// ===============================

openChat.addEventListener("click", function () {

    opening.style.display = "none";
    chatScreen.style.display = "flex";

});


// ===============================
// ADD MESSAGE
// ===============================

function addMessage(text, sender) {

    const message = document.createElement("div");

    message.classList.add("message", sender);

    message.textContent = text;

    chat.appendChild(message);

    chat.scrollTop = chat.scrollHeight;
}


// ===============================
// SHOW CHOICES
// ===============================

function showChoices(options) {

    choices.innerHTML = "";

    options.forEach(option => {

        const button = document.createElement("button");

        button.classList.add("choice");

        button.textContent = option.text;


        button.addEventListener("click", function () {

            // tampilkan jawaban kita
            addMessage(option.text, "me");


            // hilangkan pilihan sementara
            choices.innerHTML = "";


            // tunggu sebelum dia membalas
            setTimeout(function () {

                // tampilkan balasan
                addMessage(option.reply, "them");


                // tampilkan pilihan berikutnya
                if (option.next && option.next.length > 0) {

                    showChoices(option.next);

                }

            }, 1500);

        });


        choices.appendChild(button);

    });
}


// ===============================
// FIRST CONVERSATION
// ===============================

showChoices([

    {
        text: "i don't know.",

        reply: "you don't usually text me when you don't know.",

        next: [

            {
                text: "maybe i missed talking to you.",

                reply: "maybe?",

                next: [

                    {
                        text: "yeah. maybe.",

                        reply: "i thought you were over it.",

                        next: [

                            {
                                text: "i thought so too.",

                                reply: "then why are you here?",

                                next: []
                            },

                            {
                                text: "i guess i was wrong.",

                                reply: "about me or about yourself?",

                                next: []
                            }

                        ]
                    },

                    {
                        text: "forget i said that.",

                        reply: "too late.",

                        next: [

                            {
                                text: "you always make things difficult.",

                                reply: "you came back first.",

                                next: []
                            },

                            {
                                text: "goodnight.",

                                reply: "goodnight.",

                                next: []
                            }

                        ]
                    }

                ]
            },

            {
                text: "forget it.",

                reply: "you always do that.",

                next: [

                    {
                        text: "do what?",

                        reply: "come back, then pretend you didn't.",

                        next: []
                    },

                    {
                        text: "sorry.",

                        reply: "don't be.",

                        next: []
                    }

                ]
            }

        ]
    },


    {
        text: "just wanted to talk.",

        reply: "at 11:47 PM?",

        next: [

            {
                text: "couldn't sleep.",

                reply: "or couldn't stop thinking?",

                next: [

                    {
                        text: "maybe both.",

                        reply: "still the same, huh?",

                        next: []
                    },

                    {
                        text: "don't make it weird.",

                        reply: "i'm not the one who opened this chat.",

                        next: []
                    }

                ]
            },

            {
                text: "is that a problem?",

                reply: "no. just unexpected.",

                next: [

                    {
                        text: "you sound disappointed.",

                        reply: "should i be?",

                        next: []
                    },

                    {
                        text: "i can leave.",

                        reply: "i didn't say that.",

                        next: []
                    }

                ]
            }

        ]
    },


    {
        text: "never mind.",

        reply: "you always do that.",

        next: [

            {
                text: "do what?",

                reply: "come back, then pretend you didn't.",

                next: [

                    {
                        text: "maybe i shouldn't have texted.",

                        reply: "maybe you shouldn't have disappeared either.",

                        next: []
                    },

                    {
                        text: "you noticed?",

                        reply: "of course i noticed.",

                        next: []
                    }

                ]
            },

            {
                text: "sorry.",

                reply: "don't be.",

                next: [

                    {
                        text: "i missed you.",

                        reply: "...i know.",

                        next: []
                    },

                    {
                        text: "forget it.",

                        reply: "you really haven't changed.",

                        next: []
                    }

                ]
            }

        ]
    }

]);