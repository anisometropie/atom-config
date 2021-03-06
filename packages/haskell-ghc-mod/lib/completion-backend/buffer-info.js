"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const atom_1 = require("atom");
const atom_haskell_utils_1 = require("atom-haskell-utils");
class BufferInfo {
    constructor(buffer) {
        this.buffer = buffer;
        this.oldText = '';
        this.oldImports = { name: 'Main', imports: [] };
        this.destroy = () => {
            this.disposables.dispose();
        };
        this.disposables = new atom_1.CompositeDisposable();
        this.disposables.add(this.buffer.onDidDestroy(this.destroy));
    }
    async getImports() {
        const parsed = await this.parse();
        const imports = parsed ? parsed.imports : [];
        if (!imports.some(({ name }) => name === 'Prelude')) {
            imports.push({
                qualified: false,
                hiding: false,
                name: 'Prelude',
                importList: null,
                alias: null,
            });
        }
        return imports;
    }
    async getModuleName() {
        const parsed = await this.parse();
        return parsed.name;
    }
    async parse() {
        const newText = this.buffer.getText();
        if (this.oldText === newText) {
            return this.oldImports;
        }
        else {
            this.oldText = newText;
            this.oldImports = await atom_haskell_utils_1.parseHsModuleImports(this.buffer.getText());
            return this.oldImports;
        }
    }
}
exports.BufferInfo = BufferInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVmZmVyLWluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcGxldGlvbi1iYWNrZW5kL2J1ZmZlci1pbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQXNEO0FBQ3RELDJEQUkyQjtBQUkzQixNQUFhLFVBQVU7SUFLckIsWUFBNEIsTUFBa0I7UUFBbEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUh0QyxZQUFPLEdBQVcsRUFBRSxDQUFBO1FBQ3BCLGVBQVUsR0FBbUIsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQTtRQU8zRCxZQUFPLEdBQUcsR0FBRyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDNUIsQ0FBQyxDQUFBO1FBTkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLDBCQUFtQixFQUFFLENBQUE7UUFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7SUFDOUQsQ0FBQztJQU1NLEtBQUssQ0FBQyxVQUFVO1FBQ3JCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ2pDLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO1FBRTVDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxFQUFFO1lBQ25ELE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLElBQUksRUFBRSxTQUFTO2dCQUNmLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixLQUFLLEVBQUUsSUFBSTthQUNaLENBQUMsQ0FBQTtTQUNIO1FBRUQsT0FBTyxPQUFPLENBQUE7SUFDaEIsQ0FBQztJQUVNLEtBQUssQ0FBQyxhQUFhO1FBQ3hCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ2pDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQTtJQUNwQixDQUFDO0lBRU8sS0FBSyxDQUFDLEtBQUs7UUFDakIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUNyQyxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxFQUFFO1lBQzVCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQTtTQUN2QjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7WUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLHlDQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtZQUNuRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUE7U0FDdkI7SUFDSCxDQUFDO0NBQ0Y7QUE5Q0QsZ0NBOENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9zaXRlRGlzcG9zYWJsZSwgVGV4dEJ1ZmZlciB9IGZyb20gJ2F0b20nXG5pbXBvcnQge1xuICBwYXJzZUhzTW9kdWxlSW1wb3J0cyxcbiAgSU1vZHVsZUltcG9ydHMsXG4gIElJbXBvcnQsXG59IGZyb20gJ2F0b20taGFza2VsbC11dGlscydcblxuZXhwb3J0IHsgSUltcG9ydCB9XG5cbmV4cG9ydCBjbGFzcyBCdWZmZXJJbmZvIHtcbiAgcHJpdmF0ZSBkaXNwb3NhYmxlczogQ29tcG9zaXRlRGlzcG9zYWJsZVxuICBwcml2YXRlIG9sZFRleHQ6IHN0cmluZyA9ICcnXG4gIHByaXZhdGUgb2xkSW1wb3J0czogSU1vZHVsZUltcG9ydHMgPSB7IG5hbWU6ICdNYWluJywgaW1wb3J0czogW10gfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBidWZmZXI6IFRleHRCdWZmZXIpIHtcbiAgICB0aGlzLmRpc3Bvc2FibGVzID0gbmV3IENvbXBvc2l0ZURpc3Bvc2FibGUoKVxuICAgIHRoaXMuZGlzcG9zYWJsZXMuYWRkKHRoaXMuYnVmZmVyLm9uRGlkRGVzdHJveSh0aGlzLmRlc3Ryb3kpKVxuICB9XG5cbiAgcHVibGljIGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgdGhpcy5kaXNwb3NhYmxlcy5kaXNwb3NlKClcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRJbXBvcnRzKCk6IFByb21pc2U8SUltcG9ydFtdPiB7XG4gICAgY29uc3QgcGFyc2VkID0gYXdhaXQgdGhpcy5wYXJzZSgpXG4gICAgY29uc3QgaW1wb3J0cyA9IHBhcnNlZCA/IHBhcnNlZC5pbXBvcnRzIDogW11cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZTogbm8tbnVsbC1rZXl3b3JkXG4gICAgaWYgKCFpbXBvcnRzLnNvbWUoKHsgbmFtZSB9KSA9PiBuYW1lID09PSAnUHJlbHVkZScpKSB7XG4gICAgICBpbXBvcnRzLnB1c2goe1xuICAgICAgICBxdWFsaWZpZWQ6IGZhbHNlLFxuICAgICAgICBoaWRpbmc6IGZhbHNlLFxuICAgICAgICBuYW1lOiAnUHJlbHVkZScsXG4gICAgICAgIGltcG9ydExpc3Q6IG51bGwsXG4gICAgICAgIGFsaWFzOiBudWxsLFxuICAgICAgfSlcbiAgICB9XG4gICAgLy8gdHNsaW50OmVuYWJsZTogbm8tbnVsbC1rZXl3b3JkXG4gICAgcmV0dXJuIGltcG9ydHNcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRNb2R1bGVOYW1lKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgcGFyc2VkID0gYXdhaXQgdGhpcy5wYXJzZSgpXG4gICAgcmV0dXJuIHBhcnNlZC5uYW1lXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHBhcnNlKCk6IFByb21pc2U8SU1vZHVsZUltcG9ydHM+IHtcbiAgICBjb25zdCBuZXdUZXh0ID0gdGhpcy5idWZmZXIuZ2V0VGV4dCgpXG4gICAgaWYgKHRoaXMub2xkVGV4dCA9PT0gbmV3VGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMub2xkSW1wb3J0c1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9sZFRleHQgPSBuZXdUZXh0XG4gICAgICB0aGlzLm9sZEltcG9ydHMgPSBhd2FpdCBwYXJzZUhzTW9kdWxlSW1wb3J0cyh0aGlzLmJ1ZmZlci5nZXRUZXh0KCkpXG4gICAgICByZXR1cm4gdGhpcy5vbGRJbXBvcnRzXG4gICAgfVxuICB9XG59XG4iXX0=