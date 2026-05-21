---
title: "hs-http"
description: "HTTP/1.1 & HTTP/2 server with C/C++ plugin support"
date: 2024-06-15
github: "https://github.com/hyperstack-linux/hs-http"
tags: ["C", "C++", "HTTP/2", "Linux"]
thumbnail: "/ss/hs-http_index.png"
screenshots:
  - src: "/ss/hs-http_index.png"
    alt: "hs-http main interface"
  - src: "/ss/hs-http_404.png"
    alt: "hs-http 404 page"
  - src: "/ss/hs_http_example_plugin.png"
    alt: "hs-http plugin example"
---

A custom HTTP server implementation written in C with emphasis on modularity and performance. The plugin system allows developers to extend server functionality by writing modules in C or C++ without modifying the core codebase. Supports HTTP/1.1 keep-alive, pipelining, and HTTP/2 with prioritization for improved latency on modern web workloads.
