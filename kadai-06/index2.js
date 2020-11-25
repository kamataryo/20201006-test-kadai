try {
    const str1 = "abc"
    JSON.parse(str1)
} catch (error) {
    // 正しいJSONではないのでパースできない。
    // 文字列だけの JSON は、ダブルクオーテーションで囲む必要がある。
    // 正しくは const str1 = '"abc"' のようなJSON文字列になる。
}

try {
    const str2 = "'abc'"
    JSON.parse(str2)
} catch (error) {
    // JSON での文字列はシングルクオートではなくダブルクオートで囲む必要があるため。
}

const str3 = '"abc"'
JSON.parse(str3)