---
title: "FastEval - What is this and how I wrote this"
description: "An article describing my open-source solution FastEval, which allows for very fast benchmarking of language models."
date: 2026-05-16
doi: "10.5281/zenodo.20234223"
code: "https://github.com/aplominski/fasteval"
tags: ["AI", "Benchmarks", "Evaluation"]
cite_data: |
  @misc{plominski2026fasteval,
    author       = {Płomiński, Aleksander},
    title        = {{Fasteval: Fast LLM Evaluation Software}},
    year         = {2026},
    doi          = {10.5281/zenodo.20234223},
    url          = {https://zenodo.org/doi/10.5281/zenodo.20234223},
    publisher    = {Zenodo},
    note         = {Copyright \copyright\ Creative Commons Attribution 4.0 International}
  }

references: |
  @misc{kwon2023efficientmemorymanagementlarge,
      title={Efficient Memory Management for Large Language Model Serving with PagedAttention}, 
      author={Woosuk Kwon and Zhuohan Li and Siyuan Zhuang and Ying Sheng and Lianmin Zheng and Cody Hao Yu and Joseph E. Gonzalez and Hao Zhang and Ion Stoica},
      year={2023},
      eprint={2309.06180},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2309.06180}, 
  }
  @misc{cobbe2021trainingverifierssolvemath,
      title={Training Verifiers to Solve Math Word Problems}, 
      author={Karl Cobbe and Vineet Kosaraju and Mohammad Bavarian and Mark Chen and Heewoo Jun and Lukasz Kaiser and Matthias Plappert and Jerry Tworek and Jacob Hilton and Reiichiro Nakano and Christopher Hesse and John Schulman},
      year={2021},
      eprint={2110.14168},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2110.14168}, 
  }
  @misc{hendrycks2021measuringmassivemultitasklanguage,
      title={Measuring Massive Multitask Language Understanding}, 
      author={Dan Hendrycks and Collin Burns and Steven Basart and Andy Zou and Mantas Mazeika and Dawn Song and Jacob Steinhardt},
      year={2021},
      eprint={2009.03300},
      archivePrefix={arXiv},
      primaryClass={cs.CY},
      url={https://arxiv.org/abs/2009.03300}, 
  }
---

During my research, I often found myself needing to evaluate the performance of different models in order to compare them with one another. Due to the high 
computational overhead of existing tools, I could not afford to use them. For this reason, I created **FastEval**, a tool whose main (and indeed sole) purpose is to perform benchmarks efficiently. In this article, I will explain what it is, how I built it, and what its limitations are.

Given the purpose of this tool, I chose the fastest LLM computational backend I know of – [vLLM](https://docs.vllm.ai/en/latest/); using it can significantly speed up AI interactions. As promised by the creators of vLLM in their paper *Efficient Memory Management for Large Language Model Serving with PagedAttention*^$(kwon2023efficientmemorymanagementlarge), we can expect a performance increase of between two and five times. 

During development, I used *Python* and, from the libraries, I utilised the aforementioned vLLMs as well as [*datasets*](https://huggingface.co/docs/datasets/index) from *Hugging Face*. 

Currently, **FastEval** supports two test execution modes:
1. onepass – this is the type used, for example, in the *MMLU* benchmark^$(hendrycks2021measuringmassivemultitasklanguage). It involves generating logits for the given answers and comparing the probabilities
2. fullgen - this is a generation mode used, for example, in the *GSM8K*^$(cobbe2021trainingverifierssolvemath) benchmark. It involves generating full responses and extracting the final predicted answer from the generated text.

While FastEval currently focuses on these two benchmarks, its modular architecture is designed to allow for the seamless addition of new datasets and evaluation metrics.

The entire project is available on [my GitHub](https://github.com/aplominski/fasteval); a link to it can be found in the "Code" tab. The entire repository is licensed under the BSD-3-Clause licence. Any contributions related to adding further benchmarks or optimalistaions are welcome. 