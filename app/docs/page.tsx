import { Image } from "@heroui/image";

import { title } from "@/components/primitives";

export default function DocsPage() {
  return (
    <div>
      <h1 className={title()}>Intro</h1>

      <div className="my-20">
        <span className="text-2xl mr-6">In the Beginning...</span>{" "}
        {/* <span className="text-xs">Especially for a docs page.</span> */}
      </div>

      <div className="flex gap-3">
        <p>
          Gabrial began subserviant to the Council of Heaven, which formed to
          take over managment of heaven after God abandoned this world. The
          council of heaven slowly became highly corrupt, and began to severely
          punish any attempts at redeption by those in hell.
        </p>
      </div>

      <br />

      <div className="flex gap-3">
        <p>
          During this time, he commited various unfortunate actions, such as
          killing King Minos, the ruler of the Lust Layer, because he created a
          paradise in hell, which was considered heresy. At this point in time,
          most people would consider Gabrial as an evil right hand man to the
          Council of Heaven, although this isn&apos;t neccesarily unanimous because
          he was technically being coerced by the Council due to the Council&apos;s
          power.
        </p>
      </div>

      <br />
      <Image
        alt="img2"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0buCRZSNjBx1lw-DzGXaGzdGb3-rSrCJqw&s"
        width={500}
      />
      <br />
      <br />
    </div>
  );
}
