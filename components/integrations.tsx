import { Tag } from "@/components/tag";
import { IntegrationColumn } from "@/components/integration-column";

import { integrationData } from "@/lib/data";

export const Integrations = () => {
  return (
    <section className="py-24 overflow-hidden" id="integrations">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <div className="flex justify-center md:justify-start">
              <Tag>Integrations</Tag>
            </div>
            <h2 className="mt-6 max-w-2xl mx-auto text-4xl md:text-6xl font-medium text-center md:text-left">
              Integrates easily with <span className="text-lime-400">all</span>
            </h2>
            <p className="mt-4 text-center md:text-left text-white/50 text-lg">
              Layers connects instantly with the tools you already use, enabling
              smooth workflows and effortless team collaboration.
            </p>
          </div>
          <div>
            <div className="mt-8 lg:mt-0 h-100 lg:h-200 overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-4 mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <IntegrationColumn integrationList={integrationData} />
              <IntegrationColumn
                reverse
                integrationList={integrationData.slice().reverse()}
                className="hidden md:flex"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
