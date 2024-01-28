<!-- This is a beta version of the onboarding page which users will go to in order to create their
account for our website. Their information will ideally be collected and sent to the database. -->

<div id="login" class="max-w-xl mx-auto">
  <div>
    <form class="flex flex-col space-y-5 bg-gray-400 p-8 rounded-2xl">
      <h2 class="text-center text-4xl">Create Account</h2>
      <p class="text-center text-lg">
        Using this platform to keep up with events that are going on in your dorm.
        and make sure you are getting a full experience form your time in college.
      </p>
      <label>
          <span class="block">Email</span>
          <input class="input">
      </label>
      <label>
        <span class="block">Username</span>
        <input class="input">
    </label>
      <label>
          <span class="block">Password</span>
          <input class="input" type="password">
       </label>
       <label>
        <span class="block">Confirm Password</span>
        <input class="input" type="password">
     </label>
      <button class="bg-blue-500 text-white p-3 rounded-xl" type="submit">Sign-up</button>
      <hr>
      <button class="bg-purple-600 text-white p-3 rounded-xl flex flex-row items-center space-x-4 justify-center">
          <img alt="University of Washington Block W Logo" class="w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Washington_Huskies_logo.svg/1200px-Washington_Huskies_logo.svg.png">
          <span class="block font-bold">
              UW Net ID Sign-up
          </span>
      </button>
    </form>
  </div>
</div>


<!-- Styling the webpage -->
<style lang="postcss">
  .input{
      @apply w-full p-2 rounded focus:outline-none border-0;
  }

  #login{
    margin-top: 5%;
  }
</style>