import React from "react";
import { Accordion } from "../component/Accordion";
import ScrollReveal, { anim } from "../container/ScrollReveal";

export default function Faq() {
  return (
    <section className="mt-24 overflow-x-clip" id="faq">
      <div className="container-xxl relative">
        <div className="pt-36">
          <div className="rounded-2xl bg-slate-200 bg-opacity-60 backdrop-blur-sm px-4 pb-4 pt-16 md:p-16">
            <div className="text-center">
              <ScrollReveal config={anim.animate5}>
                <h5 className="text-5xl font-bold text-primary">What is Staking?</h5>
              </ScrollReveal>
              <ScrollReveal config={anim.animate5}>
                <p className="text-primary-dark font-medium mt-6 mb-12">
                  Proof of Stake blockchains use staking as the security mechanism to keep nodes
                  honest. You can help protect networks, while holding your crypto in your wallet,
                  delegating them to a trusted validator. In return, you get rewards..
                </p>
              </ScrollReveal>
            </div>

            <Accordion defaultActiveKey="0">
              <Accordion.Item
                eventKey="0"
                className="border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors rounded-lg mb-2"
              >
                <Accordion.Header className="py-3 px-5 text-left font-semibold">
                  What is proof of stake in blockchain?
                </Accordion.Header>
                <Accordion.Body>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                  et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                  craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
                  heard of them accusamus labore sustainable VHS.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item
                eventKey="1"
                className="border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors rounded-lg mb-2"
              >
                <Accordion.Header className="py-3 px-5 text-left font-semibold">
                  What does qube.vc staking investment platform do?
                </Accordion.Header>
                <Accordion.Body>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                  et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                  craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
                  heard of them accusamus labore sustainable VHS.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item
                eventKey="2"
                className="border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors rounded-lg mb-2"
              >
                <Accordion.Header className="py-3 px-5 text-left font-semibold">
                  What are minimum and maximum deposit?
                </Accordion.Header>
                <Accordion.Body>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                  et. samus labore sustainable VHS.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item
                eventKey="2"
                className="border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors rounded-lg mb-2"
              >
                <Accordion.Header className="py-3 px-5 text-left font-semibold">
                  How much does it cost to stake with qube.vc?
                </Accordion.Header>
                <Accordion.Body>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                  et. samus labore sustainable VHS.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item
                eventKey="2"
                className="border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors rounded-lg mb-2"
              >
                <Accordion.Header className="py-3 px-5 text-left font-semibold">
                  How do you keep my funds safe?
                </Accordion.Header>
                <Accordion.Body>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                  et. samus labore sustainable VHS.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
