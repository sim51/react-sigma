module.exports = {
  docs: [
    { type: "category", label: "Getting started", items: ["start-introduction", "start-installation", "start-setup"] },
    {
      type: "category",
      label: "API",
      items: [
        { type: "doc", id: "api", label: "index" },
        {
          type: "autogenerated",
          dirName: "api",
        },
      ],
    },
    {
      type: "doc",
      label: "FAQ",
      id: "faq",
    },
  ],
};