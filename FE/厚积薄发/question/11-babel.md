# babel 怎么把字符串解析成 AST，是怎么进行词法/语法分析的？
- input => tokenizer => tokens，先对输入代码进行分词，根据最小有效语法单元，对字符串进行切割。
- tokens => parser => AST，然后进行语法分析，会涉及到读取、暂存、回溯、暂存点销毁等操作。
- AST => transformer => newAST，然后转换生成新的 AST。
- newAST => codeGenerator => output，最后根据新生成的 AST 输出目标代码。

