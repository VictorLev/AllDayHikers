"use client"

import Section from "./ui/section";


const Messages = () => {

    return (
      <div>
        <Section title={"HIKING FAR IN AUSTRALIA"}>
          <div className="flex flex-row justify-center">
            <div className="mt-8 px-4 py-2 tracking-widest font-light text-2xl">
              At AllDayHikers Light, we&apos;ve selected the best lightweight outdoor gear and clothing for your next adventure.
            </div>
          </div>

          <div className="mt-8 px-4 py-2 tracking-widest font-light text-2xl text-center">
            Shop online, or visit us in store if you&apos;re in Melbourne. You can also chat to us by phone or email; we&apos;re happy to spend time providing personalised recommendations, to ensure you have the most suitable gear for your activity.
          </div>


        </Section>
      </div>
     );
}

export default Messages;
