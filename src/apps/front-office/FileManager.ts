
import { DirectoryNode } from "../types/FileManager.types";
export default class FileManager{
    /**
     * Root path
     */
    protected rootPath = "/";

    /**
     * Current directory path
     */
    protected currentDirectoryPath = "/";
    protected currentDirectoryNode?: DirectoryNode;
}