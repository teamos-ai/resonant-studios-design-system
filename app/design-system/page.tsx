import Hero from "./_sections/Hero";
import Foundations from "./_sections/Foundations";
import Components from "./_sections/Components";
import Voice from "./_sections/Voice";
import Examples from "./_sections/Examples";
import Accessibility from "./_sections/Accessibility";
import Library from "./_sections/Library";
import { SectionDivider } from "./_sections/_shared";

/* =================================================================
   Single-page styleguide. Outer column is centred at 880 px with
   generous side gaps. Six sections, each separated from the next by
   a SectionDivider image inside a rounded card.
   ================================================================= */

const COLUMN = 880;
const SIDE_PAD = "clamp(20px, 5vw, 64px)";

export default function DesignSystemPage() {
  return (
    <div
      style={{
        maxWidth: COLUMN + 128,
        margin: "0 auto",
        paddingLeft: SIDE_PAD,
        paddingRight: SIDE_PAD,
        paddingTop: 0,
        paddingBottom: 96,
      }}
    >
      <Hero />

      <Foundations />

      {/* 01 → 02 */}
      <SectionDivider
        src="/library/participants/founder-client.jpg"
        alt="Tony at the mixing console with a participant on guitar in the live room behind."
        caption="From tokens to working components — Tony at the desk."
      />

      <Components />

      {/* 02 → 03 */}
      <SectionDivider
        src="/library/equipment/drums-cymbal.jpg"
        alt="Cymbal stand with a drum kit detail beyond, on a patterned rug."
        caption="Components compose like a kit. Voice is what gives them rhythm."
      />

      <Voice />

      {/* 03 → 04 */}
      <SectionDivider
        src="/library/studio/studio-side.jpg"
        alt="Side view of the studio — wood paneling, monitors, console edge."
        caption="Voice and tokens are the bones. Examples are the room."
      />

      <Examples />

      {/* 04 → 05 */}
      <SectionDivider
        src="/library/equipment/amps-stack.jpg"
        alt="Vintage tube amp head stacked on a 5150 head, sitting on speaker cabinets."
        caption="Volume earns the room it takes. So does accessibility."
      />

      <Accessibility />

      {/* 05 → 06 */}
      <SectionDivider
        src="/library/studio/live-room-drums.jpg"
        alt="Wide shot of the studio live room — wooden walls with acoustic treatment and a drum kit."
        caption="The room itself. Reference imagery for the website build follows."
      />

      <Library />
    </div>
  );
}
