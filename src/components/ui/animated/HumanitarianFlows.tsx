'use client';

import React, { useEffect, useRef, useState } from 'react';

// ============================================================================
// SMS Verification Flow Component
// ============================================================================

type VerificationStage = 'package' | 'sending' | 'verifying' | 'result';
type VerificationResult = 'GENUINE' | 'FAKE';

export function SMSVerificationFlow() {
  const [stage, setStage] = useState<VerificationStage>('package');
  const [result, setResult] = useState<VerificationResult>('GENUINE');
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const stages: VerificationStage[] = ['package', 'sending', 'verifying', 'result'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % stages.length;
      setStage(stages[currentIndex]);

      // Randomly determine if genuine or fake when showing result
      if (stages[currentIndex] === 'result') {
        setResult(Math.random() > 0.3 ? 'GENUINE' : 'FAKE');
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      <div className="bg-gradient-to-br from-stone-950 to-stone-900 rounded-2xl border border-stone-800 p-8 shadow-2xl">
        {/* Title */}
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Drug Verification System</h3>
          <p className="text-stone-400 text-sm font-mono">SMS-based Authentication</p>
        </div>

        {/* Visualization Area */}
        <div className="relative h-64 flex items-center justify-center">
          {/* Package Stage */}
          {stage === 'package' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center animate-fade-in">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg shadow-orange-500/50 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">💊</div>
                    <div className="text-xs font-mono">MEDICINE</div>
                  </div>
                </div>
                {/* Scratch Code */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-stone-800 border border-cyan-500/50 rounded-lg px-4 py-2 shadow-lg shadow-cyan-500/30">
                  <div className="text-cyan-400 font-mono text-sm font-bold">ABC123XYZ</div>
                </div>
              </div>
            </div>
          )}

          {/* Sending SMS Stage */}
          {stage === 'sending' && (
            <div className="absolute inset-0 flex items-center justify-between px-8 animate-fade-in">
              {/* Phone */}
              <div className="relative">
                <div className="w-20 h-32 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl shadow-lg shadow-cyan-500/50 flex items-center justify-center border-4 border-stone-900">
                  <div className="text-2xl">📱</div>
                </div>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-stone-800 border border-cyan-500/50 rounded px-2 py-1">
                  <div className="text-cyan-400 font-mono text-xs">SMS</div>
                </div>
              </div>

              {/* Animated SMS Packets */}
              <div className="flex-1 relative h-2 mx-4">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-cyan-500/30"></div>
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-500/50 animate-pulse"
                    style={{
                      left: `${20 + i * 25}%`,
                      animation: `float-right 1.5s ease-in-out ${i * 0.3}s infinite`,
                    }}
                  />
                ))}
              </div>

              {/* Server */}
              <div className="w-20 h-32 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl shadow-lg shadow-emerald-500/50 flex items-center justify-center">
                <div className="text-2xl">🖥️</div>
              </div>
            </div>
          )}

          {/* Verifying Stage */}
          {stage === 'verifying' && (
            <div className="absolute inset-0 flex items-center justify-center animate-fade-in">
              <div className="relative">
                <div className="w-40 h-40 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full shadow-lg shadow-purple-500/50 flex items-center justify-center animate-pulse">
                  <div className="text-white text-center">
                    <div className="text-5xl mb-2">🔍</div>
                    <div className="text-xs font-mono">VERIFYING...</div>
                  </div>
                </div>
                {/* Rotating ring */}
                <div className="absolute inset-0 border-4 border-transparent border-t-purple-400 rounded-full animate-spin"></div>
              </div>
            </div>
          )}

          {/* Result Stage */}
          {stage === 'result' && (
            <div className="absolute inset-0 flex items-center justify-center animate-fade-in">
              <div className={`relative w-56 h-56 bg-gradient-to-br ${
                result === 'GENUINE' ? 'from-emerald-500 to-emerald-600' : 'from-red-500 to-red-600'
              } rounded-2xl shadow-lg ${
                result === 'GENUINE' ? 'shadow-emerald-500/50' : 'shadow-red-500/50'
              } flex items-center justify-center animate-bounce-in`}>
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">{result === 'GENUINE' ? '✓' : '✗'}</div>
                  <div className="text-2xl font-bold mb-2">{result}</div>
                  <div className="text-xs font-mono opacity-80">
                    {result === 'GENUINE' ? 'Safe to use' : 'Counterfeit detected'}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Stage Indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {['package', 'sending', 'verifying', 'result'].map((s, i) => (
            <div
              key={s}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                stage === s ? 'bg-cyan-400 w-8' : 'bg-stone-700'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Project Impact Flow Component
// ============================================================================

interface FlowNode {
  id: string;
  label: string;
  icon: string;
  color: string;
  position: { x: number; y: number };
}

export function ProjectImpactFlow() {
  const [packets, setPackets] = useState<Array<{ id: number; progress: number; stage: number }>>([]);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const packetIdRef = useRef(0);

  const nodes: FlowNode[] = [
    { id: 'problem', label: 'Problem', icon: '⚠️', color: 'red', position: { x: 10, y: 50 } },
    { id: 'solution', label: 'Solution', icon: '💡', color: 'cyan', position: { x: 50, y: 50 } },
    { id: 'impact', label: 'Impact', icon: '❤️', color: 'emerald', position: { x: 90, y: 50 } },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Spawn packets
  useEffect(() => {
    if (!isVisible) return;

    const spawnInterval = setInterval(() => {
      setPackets((prev) => [
        ...prev,
        { id: packetIdRef.current++, progress: 0, stage: 0 },
      ]);
    }, 1500);

    return () => clearInterval(spawnInterval);
  }, [isVisible]);

  // Animate packets
  useEffect(() => {
    if (!isVisible) return;

    const animationInterval = setInterval(() => {
      setPackets((prev) => {
        return prev
          .map((packet) => {
            const newProgress = packet.progress + 2;
            let newStage = packet.stage;

            if (newProgress >= 100 && packet.stage < 2) {
              newStage = packet.stage + 1;
              return { ...packet, progress: 0, stage: newStage };
            }

            return { ...packet, progress: newProgress, stage: newStage };
          })
          .filter((packet) => !(packet.stage === 2 && packet.progress >= 100));
      });
    }, 30);

    return () => clearInterval(animationInterval);
  }, [isVisible]);

  const getPacketPosition = (packet: { progress: number; stage: number }) => {
    const fromNode = nodes[packet.stage];
    const toNode = nodes[packet.stage + 1];
    if (!toNode) return { x: fromNode.position.x, y: fromNode.position.y };

    const x = fromNode.position.x + (toNode.position.x - fromNode.position.x) * (packet.progress / 100);
    const y = fromNode.position.y + (toNode.position.y - fromNode.position.y) * (packet.progress / 100);

    return { x, y };
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-3xl mx-auto">
      <div className="bg-gradient-to-br from-stone-950 to-stone-900 rounded-2xl border border-stone-800 p-8 shadow-2xl">
        {/* Title */}
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Hackathon Impact Pipeline</h3>
          <p className="text-stone-400 text-sm font-mono">From Problem to Lives Saved</p>
        </div>

        {/* Visualization */}
        <div className="relative h-64 bg-stone-900/50 rounded-xl border border-stone-800 overflow-hidden">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full">
            <line
              x1="10%" y1="50%" x2="50%" y2="50%"
              stroke="rgb(239 68 68 / 0.3)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <line
              x1="50%" y1="50%" x2="90%" y2="50%"
              stroke="rgb(6 182 212 / 0.3)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          </svg>

          {/* Nodes */}
          {nodes.map((node) => (
            <div
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${node.position.x}%`, top: `${node.position.y}%` }}
            >
              <div className={`relative bg-gradient-to-br from-${node.color}-500 to-${node.color}-600 w-20 h-20 rounded-full shadow-lg shadow-${node.color}-500/50 flex items-center justify-center border-4 border-stone-900`}>
                <div className="text-3xl">{node.icon}</div>
              </div>
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <div className={`bg-stone-800 border border-${node.color}-500/50 rounded px-3 py-1`}>
                  <div className={`text-${node.color}-400 font-mono text-xs font-bold`}>{node.label}</div>
                </div>
              </div>
            </div>
          ))}

          {/* Animated Packets */}
          {packets.map((packet) => {
            const pos = getPacketPosition(packet);
            const colors = ['red', 'cyan', 'emerald'];
            const color = colors[packet.stage] || 'cyan';

            return (
              <div
                key={packet.id}
                className={`absolute w-3 h-3 bg-${color}-400 rounded-full shadow-lg shadow-${color}-500/50 animate-pulse -translate-x-1/2 -translate-y-1/2`}
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                }}
              />
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <span className="text-stone-400">Identifying Problems</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
            <span className="text-stone-400">Building Solutions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
            <span className="text-stone-400">Creating Impact</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Network Mesh Demo Component
// ============================================================================

interface MeshNode {
  id: string;
  label: string;
  icon: string;
  position: { x: number; y: number };
  status: 'online' | 'offline';
  connections: string[];
}

interface DataPacket {
  id: number;
  path: string[];
  currentIndex: number;
  progress: number;
}

export function NetworkMeshDemo() {
  const [packets, setPackets] = useState<DataPacket[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const packetIdRef = useRef(0);

  const nodes: MeshNode[] = [
    {
      id: 'hospital',
      label: 'Hospital',
      icon: '🏥',
      position: { x: 25, y: 25 },
      status: 'offline',
      connections: ['school', 'home1'],
    },
    {
      id: 'school',
      label: 'School',
      icon: '🏫',
      position: { x: 75, y: 25 },
      status: 'online',
      connections: ['hospital', 'tower', 'home2'],
    },
    {
      id: 'home1',
      label: 'Home A',
      icon: '🏠',
      position: { x: 25, y: 75 },
      status: 'online',
      connections: ['hospital', 'home2'],
    },
    {
      id: 'home2',
      label: 'Home B',
      icon: '🏠',
      position: { x: 50, y: 60 },
      status: 'online',
      connections: ['home1', 'school', 'tower'],
    },
    {
      id: 'tower',
      label: 'Cell Tower',
      icon: '📡',
      position: { x: 75, y: 75 },
      status: 'online',
      connections: ['school', 'home2'],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Spawn packets
  useEffect(() => {
    if (!isVisible) return;

    const spawnInterval = setInterval(() => {
      // Create a packet that routes around the offline hospital
      // Path: home1 -> home2 -> school -> tower
      setPackets((prev) => [
        ...prev,
        {
          id: packetIdRef.current++,
          path: ['home1', 'home2', 'school', 'tower'],
          currentIndex: 0,
          progress: 0,
        },
      ]);
    }, 2000);

    return () => clearInterval(spawnInterval);
  }, [isVisible]);

  // Animate packets
  useEffect(() => {
    if (!isVisible) return;

    const animationInterval = setInterval(() => {
      setPackets((prev) => {
        return prev
          .map((packet) => {
            const newProgress = packet.progress + 1.5;

            if (newProgress >= 100 && packet.currentIndex < packet.path.length - 1) {
              return { ...packet, progress: 0, currentIndex: packet.currentIndex + 1 };
            }

            return { ...packet, progress: newProgress };
          })
          .filter((packet) => packet.currentIndex < packet.path.length - 1 || packet.progress < 100);
      });
    }, 30);

    return () => clearInterval(animationInterval);
  }, [isVisible]);

  const getPacketPosition = (packet: DataPacket) => {
    const fromNode = nodes.find((n) => n.id === packet.path[packet.currentIndex]);
    const toNode = nodes.find((n) => n.id === packet.path[packet.currentIndex + 1]);

    if (!fromNode || !toNode) return { x: 0, y: 0 };

    const x = fromNode.position.x + (toNode.position.x - fromNode.position.x) * (packet.progress / 100);
    const y = fromNode.position.y + (toNode.position.y - fromNode.position.y) * (packet.progress / 100);

    return { x, y };
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-3xl mx-auto">
      <div className="bg-gradient-to-br from-stone-950 to-stone-900 rounded-2xl border border-stone-800 p-8 shadow-2xl">
        {/* Title */}
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Disaster Mesh Network</h3>
          <p className="text-stone-400 text-sm font-mono">Self-Healing Communication Grid</p>
        </div>

        {/* Visualization */}
        <div className="relative h-80 bg-stone-900/50 rounded-xl border border-stone-800 overflow-hidden">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full">
            {nodes.map((node) =>
              node.connections.map((connId) => {
                const connNode = nodes.find((n) => n.id === connId);
                if (!connNode) return null;

                const bothOnline = node.status === 'online' && connNode.status === 'online';
                const strokeColor = bothOnline ? 'rgb(6 182 212 / 0.3)' : 'rgb(120 113 108 / 0.2)';

                return (
                  <line
                    key={`${node.id}-${connId}`}
                    x1={`${node.position.x}%`}
                    y1={`${node.position.y}%`}
                    x2={`${connNode.position.x}%`}
                    y2={`${connNode.position.y}%`}
                    stroke={strokeColor}
                    strokeWidth="2"
                    strokeDasharray={bothOnline ? '0' : '5,5'}
                  />
                );
              })
            )}
          </svg>

          {/* Nodes */}
          {nodes.map((node) => (
            <div
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${node.position.x}%`, top: `${node.position.y}%` }}
            >
              <div
                className={`relative ${
                  node.status === 'online'
                    ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-emerald-500/50'
                    : 'bg-gradient-to-br from-stone-600 to-stone-700 shadow-stone-500/50'
                } w-16 h-16 rounded-full shadow-lg flex items-center justify-center border-4 border-stone-900`}
              >
                <div className="text-2xl">{node.icon}</div>
                {node.status === 'offline' && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-2 border-stone-900 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✗</span>
                  </div>
                )}
              </div>
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <div className={`bg-stone-800 border ${
                  node.status === 'online' ? 'border-emerald-500/50' : 'border-stone-600/50'
                } rounded px-2 py-1`}>
                  <div className={`${
                    node.status === 'online' ? 'text-emerald-400' : 'text-stone-500'
                  } font-mono text-xs font-bold`}>
                    {node.label}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Animated Packets */}
          {packets.map((packet) => {
            const pos = getPacketPosition(packet);

            return (
              <div
                key={packet.id}
                className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-500/50 animate-pulse -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                }}
              />
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full"></div>
            <span className="text-stone-400">Online Node</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gradient-to-br from-stone-600 to-stone-700 rounded-full"></div>
            <span className="text-stone-400">Offline Node</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
            <span className="text-stone-400">Data Packet</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="20" height="12" className="mt-0.5">
              <line x1="0" y1="6" x2="20" y2="6" stroke="rgb(6 182 212 / 0.5)" strokeWidth="2" />
            </svg>
            <span className="text-stone-400">Active Route</span>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-4 bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <div className="text-orange-400 font-mono text-sm font-bold mb-1">Routing Around Failure</div>
              <div className="text-stone-400 text-xs">
                Data packets automatically route through available nodes, bypassing the offline hospital to reach the cell tower.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add custom animations to global CSS or use inline styles
const style = document.createElement('style');
style.textContent = `
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes bounce-in {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    50% {
      transform: scale(1.05);
    }
    70% {
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes float-right {
    0% {
      transform: translateX(0) translateY(-50%);
      opacity: 1;
    }
    100% {
      transform: translateX(300%) translateY(-50%);
      opacity: 0;
    }
  }

  .animate-fade-in {
    animation: fade-in 0.5s ease-out forwards;
  }

  .animate-bounce-in {
    animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  }
`;
if (typeof document !== 'undefined' && !document.getElementById('humanitarian-flows-styles')) {
  style.id = 'humanitarian-flows-styles';
  document.head.appendChild(style);
}
