import { normalizePath } from 'obsidian';

export async function loadHomeworkData() {
    const jsonPath = this.app.vault.adapter.getBasePath() + "/homeworkData.json";
    const normalisedPath = normalizePath(jsonPath);

    let exists = await this.app.vault.adapter.exists(normalisedPath);

    if (!exists)
        this.app.vault.create("/homeworkData.json", "{}");

    const result = await this.app.vault.adapter.read("/homeworkData.json");

    return JSON.parse(result);
}

export function saveHomeworkData(data : Object) {
    this.app.vault.adapter.write("/homeworkData.json", JSON.stringify(data));
}