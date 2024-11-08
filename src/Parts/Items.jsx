import { Avatar } from "@material-tailwind/react";

export default function Items() {
  return (
    <main className="w-full flex justify-center py-16">
      <div className={`relative w-[400px] flex justify-center items-center`}>
        <div
          className="absolute h-full w-full -z-10"
          style={{
            borderImage: "url(/one.png) 100 fill", // URL to the image and slicing settings
            borderImageWidth: "50px", // Set the width of the border image
          }}
        />
        <div
          className="absolute h-full w-full"
          style={{
            borderImage: "url(/red.png) 100 fill", // URL to the image and slicing settings
            borderImageWidth: "55px", // Set the width of the border image
          }}
        />
        <img
          src="/Fun/Rageblade.png"
          className="absolute w-[80px] top-6 right-10"
        />
        <section className="z-30 h-full w-full p-6">
          <div className="font-customExo text-[20px] text-[#e39d2b] whitespace-pre-line">
            {`Rageblade of the 
            Forsaken`}
          </div>
          <div className="font-customPt text-[16px] text-[#e39d2b] whitespace-pre-line">
            {`Ancestral Mythic Unique 
            Two-Handed Sword`}
          </div>

          <img src="/half_div.png" className="py-1" />
          <div className="font-customPt text-[16px] text-[#bab0a3]">
            <Avatar
              src="/stat.png"
              size="xs"
              className="border-l-[1px] me-1 rounded-none border-[#bab0a3]"
              variant="rounded"
            />
            [397 - 595] Damage per Hit
          </div>
          <div className="font-customPt text-[16px] text-[#bab0a3]">
            <Avatar
              src="/stat.png"
              size="xs"
              className="border-l-[1px] me-1 rounded-none border-[#bab0a3]"
              variant="rounded"
            />
            1.00 Attacks per Second (Slow)
          </div>
          <img src="/full_div.png" className="py-1 pb-4" />

          <div className="font-customPt text-[18px] text-[#fff]">
            +200.0% Damage
          </div>

          <div className="font-customPt text-[16px] text-[#bab0a3]">
            <span className="text-[10px] text-gray-500 rotate-45 inline-block me-1">
              ▣
            </span>
            +[420 - 690.0]% Damage to Bleeding Enemies
          </div>

          <div className="font-customPt text-[16px] text-[#bab0a3]">
            <span className="text-[10px] text-gray-500 rotate-45 inline-block me-1">
              ▣
            </span>
            +[18.0 - 25.0]% Basic Attack Speed
          </div>
          <div className="font-customPt text-[16px] text-[#bab0a3]">
            <span className="text-[10px] text-gray-500 rotate-45 inline-block me-1">
              ▣
            </span>
            +[90 - 101] Strength
          </div>
          <div className="font-customPt text-[16px] text-[#bab0a3]">
            <span className="text-[10px] text-gray-500 rotate-45 inline-block me-1">
              ▣
            </span>
            +666.6% Damage Over Time
          </div>
          <div className="font-customPt text-[16px] text-[#e39d2b]">
            <Avatar src="/affix.png" size="xs" className="w-[12px] me-1" />
            Inflict Bleed on your foe for 3 seconds, and your Bleed damage can
            deal Critical Hits.
          </div>

          <div className="font-customPt text-[14px] italic text-[#9b9b9b] leading-5 tracking-wide pt-2">
            "The Rageblade was forged in battle, its edge fueled by fury.
            Wielded by a champion of wrath, it cleaved through foes until, in
            the end, it turned on its master, leaving only a legacy of cursed
            power."
          </div>
          <div className="font-customPt text-[14px] italic text-[#9b9b9b] mb-2">
            - The Fall of the Bloodline
          </div>
          <div className="font-customPt text-[16px] text-[#fff] text-end">
            Requires Level 35
          </div>
          <div className="font-customPt text-[14px] text-gray-600 text-end">
            Barbarian
          </div>
          <div className="font-customPt text-[16px] text-[#bf6b31] text-end">
            <Avatar src="/sal.png" size="xs" className="w-[12px] me-1" />
            Unlocks new look on salvage
          </div>
          <img src="/full_div.png" className="pt-1" />
        </section>
      </div>
    </main>
  );
}
