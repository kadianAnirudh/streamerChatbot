import React from "react";

const NumberStats = () => {
  return (
    <div class="bg-gray-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <dl class="grid grid-cols-1 gap-x-24 gap-y-16 text-center lg:grid-cols-3">
          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt class="text-base leading-7 text-gray-300">
              This project is an advanced version of my openAI based chat bot
              which gave very generic answers
            </dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Custom Chat(Bot)
            </dd>
          </div>
          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt class="text-base leading-7 text-gray-300">
              To make sure that this service is available only to registered
              developers, the chatbot is auth protected and will not be
              accesible without signing up or logging in
            </dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Authenticated
            </dd>
          </div>
          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt class="text-base leading-7 text-gray-300">
              This chatbot will only answer queries around Stream's React chat
              SDK. I hope you like it, Thanks!
            </dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              React Chat UI
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default NumberStats;
