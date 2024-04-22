import { Heading, Link, Text } from "@radix-ui/themes";
import {
  MagnifyingGlassIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";

import ChatBubbleLeftRightIcon from "@heroicons/react/24/outline/ChatBubbleLeftRightIcon";

export const products = [
  {
    key: "1",
    icon: ChatBubbleLeftRightIcon,
    title: "Monad's AI Chatbot",
    descriptionSummary:
      "Monad redefines customer engagement with advanced conversational agents, epitomized by Hayat, Algeria's pioneering AI chatbot, shaping the future of business communication.",
    description: <ChatbotIntroduction />,
  },
  {
    key: "2",
    icon: MagnifyingGlassIcon,
    title: "Semantic Search Services",
    descriptionSummary:
      "Monad innovates data management with Semantic Search Services, offering contextualized results and vector-based methodologies while prioritizing privacy through local solutions and training programs.",
    description: <SemanticSearchServices />,
  },
  {
    key: "3",
    icon: PresentationChartLineIcon,
    title: "Monad's E-Reputation",
    descriptionSummary:
      "Monad unveils e-Reputation, an AI-driven tool for data-driven decision-making, offering strategic insights and competitive intelligence, shaping the future of business intelligence.",
    description: <EReputation />,
  },
];

function ChatbotIntroduction() {
  return (
    <div>
      <Text>
        We are thrilled to unveil our flagship product - conversational agents
        designed to revolutionize both internal (documentation, regulations) and
        external (customer-focused) communications.
        <br />
        We are thrilled to unveil our flagship product - conversational agents
        designed to revolutionize both internal (documentation, regulations) and
        external (customer-focused) communications.
        <br />
        <br />
        Our chatbots aren't just bots. They form an intricate network of
        autonomous agents, meticulously engineered to work in harmony,
        delivering an unparalleled user experience that will leave your
        customers in awe while improving your internal information processes.
        <br />
        <br />
        Harnessing the power of avant-garde Natural Language Processing (NLP)
        and machine learning technologies, our conversational agents transcend
        typical question-answering systems. they compose a dynamic entity that
        evolves with your business, tailoring its responses to match the unique
        profiles of your customers.
        <br />
        <br />
        We understand that every business is unique, and so should be your
        chatbot. The Monad chatbot is a product of extensive collaboration
        between our AI experts and your team to define the characteristics of
        your personalized conversational assistant, ensuring it aligns perfectly
        with your business goals and customer expectations.
        <br />
        <br />
        The real magic of our chatbot lies in its ecosystem of agents: -Our
        low-level agents are the diligent miners tirelessly delving into the
        depths of their knowledge bases. Armed with advanced semantic search
        techniques, they are engineered to produce the most accurate and
        pertinent responses to the queries they receive. Our low-level agents
        are also designed to expand their knowledge bases by leveraging tools
        like internet searches or social media monitoring. -Meanwhile, our
        high-level agents are seasoned strategists. They possess the ability to
        deconstruct complex instructions into a series of manageable tasks,
        invoke the expertise of lower-level agents, or assess the system’s
        current internal state.
        <br />
        <br />
        Wanna try it ? Meet Hayat[link], the first intelligent chatbot in
        Algeria! A joint venture with our partners WhiteLines and Macir Vie,
        Hayat exemplifies the transformative power of AI in enhancing customer
        interaction.
        <br />
        <br />
        At Monad, we're not just creating chatbots; we're pioneering the future
        of business communication. We invite you to join us on this exciting
        journey and experience the power of AI first-hand. Together, let's
        create a chatbot that transcends being a mere tool and evolves into a
        valuable asset for your business.
      </Text>
    </div>
  );
}

function SemanticSearchServices() {
  return (
    <div>
      <Text>
        It is time to consider enhancing your current data system by
        transitioning to a Semantic Database, which marries the utility of
        traditional databases with the cutting-edge capabilities of semantic
        technologies. This advancement significantly improves data
        representation through semantic modeling, adding context and meaning to
        your data. It facilitates complex queries, logical reasoning, and the
        revelation of key insights, thereby refining your data management
        processes.
        <br />
        <br />
        Partnering with Monad means embarking on a cooperative venture. We
        acknowledge the uniqueness of every business, warranting a customized
        data solution that mirrors its specific characteristics. Our commitment
        is to work intimately with you to either upgrade your present database
        or to craft a new one that perfectly suits your business objectives and
        data requirements.
        <br />
        <br />
        We also understand the importance of data privacy and security. For
        businesses dealing with sensitive information, we provide a 100% local
        solution. We ensure all data remains within your network. Plus, we offer
        training programs to equip your engineers with the necessary skills to
        handle and communicate with semantic databases.
        <br />
        <br />
        Want to learn more? contact us for a demo !
      </Text>
    </div>
  );
}

function EReputation() {
  return (
    <div>
      <Text>
        Monad's E-Reputation service is designed for business leaders who are
        keen on shaping their strategies with data-driven insights. Our
        innovative 'Scrap n Go' approach leverages semantic similarity
        technologies and sophisticated automation algorithms to gather the most
        precise and pertinent data for our clients.
        <br />
        <br />
        We conduct thorough analyses of this data to uncover critical
        intelligence on market trends, public sentiments, and insights into the
        competitive landscape. Our reports are crafted to be intuitive,
        combining qualitative and quantitative analyses to inform your business
        decisions and strategic directions.
        <br />
        <br />
        The 'Scrap n Go' method enables us to pinpoint and scrutinize key
        players in the industry and their communities, effectively measuring
        public sentiment towards specific brands or current topics. In
        collaboration with your team, our AI specialists customize the
        e-Reputation service to align flawlessly with your business
        requirements. Recognizing the uniqueness of each business, we are
        dedicated to ensuring that our service integrates seamlessly with your
        organizational objectives and the specific market environment in which
        you operate.
        <br />
        <br />
        Want to learn more? contact us for a demo !
      </Text>
    </div>
  );
}
