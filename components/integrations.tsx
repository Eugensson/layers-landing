import { Tag } from "@/components/ui/tag";
import { IntegrationColumn } from "@/components/integration-column";

import { integrationList } from "@/constants";

export type IntegrationType = typeof integrationList;

export const Integrations = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <div className="flex justify-center">
              <Tag>Integrations</Tag>
            </div>
            <h2 className="mt-6 text-6xl font-medium">
              Plays well with <span className="text-lime-400">others</span>
            </h2>
            <p className="mt-4 text-white/50 text-lg">
              Layers seamlessly connects with your favorite tool, making it easy
              to plug into any workflow and collaboration across platforms.
            </p>
          </div>
          <div>
            <div className="mt-8 lg:mt-0 h-[400px] lg:h-[800px] overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <IntegrationColumn integrationList={integrationList} />
              <IntegrationColumn
                reverse
                integrationList={integrationList.slice().reverse()}
                className="hidden md:flex"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
