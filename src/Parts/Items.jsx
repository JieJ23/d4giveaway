import { Avatar, Input } from "@material-tailwind/react";
import { useState } from "react";

export default function Items() {
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    itemName: "The Grandfather",
    itemType: "Ancestral Mythic Unique Two-Handed Sword",
    da1: `[397 - 595] Damage per Hit`,
    da2: `1.00 Attacks per Second (Slow)`,
    ma0: `+200.0% Damage`,
    ma1: `+[420 - 690.0]% Damage to Bleeding Enemies`,
    ma2: `+[18.0 - 25.0]% Basic Attack Speed`,
    ma3: `+[90 - 101] Strength`,
    ma4: `+666.6% Damage Over Time`,
    ma5: `Inflict Bleed on your foe for 3 seconds, and your Bleed damage can deal Critical Hits.`,
    lore: `The Rageblade was forged in battle, its edge fueled by fury. Wielded by a champion of wrath, it cleaved through foes until, in the end, it turned on its master, leaving only a legacy of cursed power.`,
    loreid: `The Fall of the Bloodline`,
    level: `35`,
    class: `Barbarian`,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Get the name and value from the input
    setFormData((prevData) => ({
      ...prevData, // Spread the previous state
      [name]: value, // Update the specific field
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Store base64 string in state
      };
      reader.readAsDataURL(file); // Convert image to base64
    }
  };

  return (
    <main className="flex flex-wrap items-center justify-center max-w-[1200px] gap-x-16 mx-auto pt-10">
      <section className="flex justify-center py-16">
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
          <div className="absolute top-6 right-8 h-[100px] w-[100px]">
            <img src={imagePreview} />
          </div>
          <section className="z-30 h-full w-full p-6">
            <div className="font-customExo text-[20px] text-[#e39d2b] w-[65%]">
              {formData.itemName}
            </div>
            <div className="font-customPt text-[16px] text-[#e39d2b] w-[65%]">
              {formData.itemType}
            </div>

            <img src="/half_div.png" className="py-1" />
            <div className="font-customPt text-[16px] text-[#bab0a3]">
              <Avatar
                src="/stat.png"
                size="xs"
                className="border-l-[1px] me-1 rounded-none border-[#bab0a3]"
                variant="rounded"
              />
              {formData.da1}
            </div>
            <div className="font-customPt text-[16px] text-[#bab0a3]">
              <Avatar
                src="/stat.png"
                size="xs"
                className="border-l-[1px] me-1 rounded-none border-[#bab0a3]"
                variant="rounded"
              />
              {formData.da2}
            </div>
            <img src="/full_div.png" className="py-1 pb-4" />

            <div className="font-customPt text-[18px] text-[#fff]">
              {formData.ma0}
            </div>

            <div className="font-customPt text-[16px] text-[#bab0a3]">
              <span className="text-[10px] text-gray-500 rotate-45 inline-block me-1">
                ▣
              </span>
              {formData.ma1}
            </div>

            <div className="font-customPt text-[16px] text-[#bab0a3]">
              <span className="text-[10px] text-gray-500 rotate-45 inline-block me-1">
                ▣
              </span>
              {formData.ma2}
            </div>
            <div className="font-customPt text-[16px] text-[#bab0a3]">
              <span className="text-[10px] text-gray-500 rotate-45 inline-block me-1">
                ▣
              </span>
              {formData.ma3}
            </div>
            <div className="font-customPt text-[16px] text-[#bab0a3]">
              <span className="text-[10px] text-gray-500 rotate-45 inline-block me-1">
                ▣
              </span>
              {formData.ma4}
            </div>
            <div className="font-customPt text-[16px] text-[#e39d2b]">
              <Avatar src="/affix.png" size="xs" className="w-[12px] me-1" />
              {formData.ma5}
            </div>

            <div className="font-customPt text-[14px] italic text-[#9b9b9b] leading-5 tracking-wide pt-2">
              {`"${formData.lore}"`}
            </div>
            <div className="font-customPt text-[14px] italic text-[#9b9b9b] mb-2">
              - {formData.loreid}
            </div>
            <div className="font-customPt text-[16px] text-[#fff] text-end">
              Requires Level {formData.level}
            </div>
            <div className="font-customPt text-[14px] text-gray-600 text-end">
              {formData.class}
            </div>
            <div className="font-customPt text-[16px] text-[#bf6b31] text-end">
              <Avatar src="/sal.png" size="xs" className="w-[12px] me-1" />
              Unlocks new look on salvage
            </div>
            <img src="/full_div.png" className="pt-1" />
          </section>
        </div>
      </section>

      <section className="text-center  gap-2 flex flex-col px-10">
        <div className="text-white font-customCin">Upload Photo</div>
        <input
          type="file"
          accept="image/*"
          className="font-serif text-white"
          onChange={handleFileChange}
        />

        <div className="font-customCin">
          <Input
            label="Name"
            color="white"
            className="font-customCin"
            name="itemName"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="font-customCin">
          <Input
            label="Type"
            color="white"
            className="font-customCin"
            name="itemType"
            value={formData.subname}
            onChange={handleInputChange}
          />
        </div>
        <div className="font-customCin">
          <Input
            label="D. Affix 1"
            color="white"
            className="font-customCin"
            name="da1"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="font-customCin">
          <Input
            label="D. Affix 2"
            color="white"
            className="font-customCin"
            name="da2"
            value={formData.subname}
            onChange={handleInputChange}
          />
        </div>
        <div className="font-customCin">
          <Input
            label="Main Stat"
            color="white"
            className="font-customCin"
            name="ma0"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="font-customCin">
          <Input
            label="Main Affix 1"
            color="white"
            className="font-customCin"
            name="ma1"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="font-customCin">
          <Input
            label="Main Affix 2"
            color="white"
            className="font-customCin"
            name="ma2"
            value={formData.subname}
            onChange={handleInputChange}
          />
        </div>
        <div className="font-customCin">
          <Input
            label="Main Affix 3"
            color="white"
            className="font-customCin"
            name="ma3"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="font-customCin">
          <Input
            label="Main Affix 4"
            color="white"
            className="font-customCin"
            name="ma4"
            value={formData.subname}
            onChange={handleInputChange}
          />
        </div>
        <div className="font-customCin">
          <Input
            label="Unique Affix"
            color="white"
            className="font-customCin"
            name="ma5"
            value={formData.subname}
            onChange={handleInputChange}
          />
        </div>
        <div className="font-customCin">
          <Input
            label="Lore"
            color="white"
            className="font-customCin"
            name="lore"
            value={formData.subname}
            onChange={handleInputChange}
          />
        </div>
        <div className="font-customCin">
          <Input
            label="Lore Regards"
            color="white"
            className="font-customCin"
            name="loreid"
            value={formData.subname}
            onChange={handleInputChange}
          />
        </div>
        <div className="font-customCin">
          <Input
            label="Req Lvl"
            color="white"
            className="font-customCin"
            name="level"
            value={formData.subname}
            onChange={handleInputChange}
          />
        </div>
        <div className="font-customCin">
          <Input
            label="Class"
            color="white"
            className="font-customCin"
            name="class"
            value={formData.subname}
            onChange={handleInputChange}
          />
        </div>
      </section>
    </main>
  );
}
