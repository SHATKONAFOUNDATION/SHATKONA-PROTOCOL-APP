import React, { useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const { width } = Dimensions.get('window');

// --- TYPES ---
type TierMode = 'RITUAL' | 'ACADEMY' | 'VISION';

export default function App() {
  const [viewMode, setViewMode] = useState<TierMode>('RITUAL');

  // --- RITUAL LOGIC (Determines the Super-Sector of the day) ---
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = days[new Date().getDay()];

  const getRoutine = () => {
    if (today === 'Monday' || today === 'Thursday') return { id: 'A', name: 'UPPER COMMAND', sub: 'Digital Reset' };
    if (today === 'Tuesday' || today === 'Friday') return { id: 'B', name: 'CORE ENGINE', sub: 'Stability & Root' };
    if (today === 'Wednesday' || today === 'Saturday') return { id: 'C', name: 'SPIRAL FOUNDATION', sub: 'Agility & Flow' };
    return { id: 'Nidra', name: 'YOGA NIDRA', sub: 'Mastery & Recovery' };
  };

  const routine = getRoutine();

  return (
    <View style={styles.mainContainer}>
      
      {/* 🏛️ SOVEREIGN HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.logoText}>THE ARCHITECT RESET</Text>
          <Text style={styles.subLogo}>SNAYULOGY™ BY DR. DAS</Text>
        </View>
        <TouchableOpacity 
          style={styles.navBtn}
          onPress={() => setViewMode(viewMode === 'RITUAL' ? 'ACADEMY' : 'RITUAL')}
        >
          <Text style={styles.navText}>
            {viewMode === 'RITUAL' ? "🎓 ACADEMY" : "🧘 RITUAL"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* 🏗️ DYNAMIC MIDDLE SECTION */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {viewMode === 'RITUAL' && (
          <View>
             <Text style={styles.sectionTitle}>Daily Maintenance</Text>
             <TouchableOpacity style={styles.ritualCard} activeOpacity={0.8}>
                <Text style={styles.ritualTag}>TODAY'S 15-MIN FLOW</Text>
                <Text style={styles.ritualName}>{routine.name}</Text>
                <Text style={styles.ritualSub}>{routine.sub}</Text>
                <View style={styles.playButton}>
                  <Text style={styles.playText}>START RESET</Text>
                </View>
             </TouchableOpacity>
             
             <View style={styles.statsRow}>
                <View style={styles.statBox}><Text style={styles.statNum}>12</Text><Text style={styles.statLabel}>STREAK</Text></View>
                <View style={styles.statBox}><Text style={styles.statNum}>84%</Text><Text style={styles.statLabel}>VAGAL TONE</Text></View>
             </View>
          </View>
        )}

        {viewMode === 'ACADEMY' && (
          <View>
            <Text style={styles.sectionTitle}>The Six Pillars</Text>
            <Text style={styles.sectionDesc}>Master the Forensic Architecture of your body.</Text>
            
            {[
              { id: 1, title: 'PRANA PULSE', dur: '30m', status: 'UNLOCKED' },
              { id: 2, title: 'MYOFASCIAL LIBERATION', dur: '45m', status: 'LOCKED' },
              { id: 3, title: 'YOGIC STRETCHING', dur: '30m', status: 'LOCKED' },
              { id: 4, title: 'THERAPEUTIC STRENGTH', dur: '45m', status: 'LOCKED' },
              { id: 5, title: 'CHAKRA BALANCE', dur: '45m', status: 'LOCKED' },
              { id: 6, title: 'VOW OF MASTERY', dur: '30m', status: 'LOCKED' },
            ].map((pillar) => (
              <TouchableOpacity key={pillar.id} style={styles.pillarCard}>
                <View>
                  <Text style={styles.pillarNum}>PILLAR 0{pillar.id}</Text>
                  <Text style={styles.pillarTitle}>{pillar.title}</Text>
                  <Text style={styles.pillarMeta}>{pillar.dur} • Forensic Education</Text>
                </View>
                <Text style={[styles.statusText, pillar.status === 'LOCKED' ? {color: '#64748b'} : {color: '#38bdf8'}]}>
                  {pillar.status === 'LOCKED' ? '🔒' : '▶'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* 🌐 FOUNDATION SECTION (ALWAYS AT BOTTOM) */}
        <View style={styles.foundationSection}>
           <Text style={styles.sectionTitle}>Global Mission</Text>
           <TouchableOpacity style={styles.visionSmallCard} onPress={() => setViewMode('VISION')}>
              <Text style={styles.visionSmallTitle}>Shatvayu Global Foundation</Text>
              <Text style={styles.visionSmallDesc}>Nagaon Geoglyph & CPRI Research</Text>
           </TouchableOpacity>
        </View>

      </ScrollView>

      {/* 🛡️ UNIVERSAL FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2026 THE ARCHITECT RESET | SOVEREIGN ARCHITECTURE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#000' },
  header: { 
    paddingTop: 60, paddingBottom: 20, paddingHorizontal: 25, 
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    backgroundColor: '#0a0a0a', borderBottomWidth: 1, borderBottomColor: '#1a1a1a'
  },
  logoText: { color: '#fbbf24', fontSize: 18, fontWeight: '900', letterSpacing: 1 },
  subLogo: { color: '#64748b', fontSize: 9, fontWeight: 'bold', letterSpacing: 1 },
  navBtn: { backgroundColor: '#1e293b', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 6 },
  navText: { color: '#fbbf24', fontSize: 10, fontWeight: 'bold' },
  
  scrollContent: { padding: 20, paddingBottom: 120 },
  sectionTitle: { color: '#fff', fontSize: 22, fontWeight: 'bold', marginBottom: 5 },
  sectionDesc: { color: '#64748b', fontSize: 14, marginBottom: 20 },
  
  ritualCard: { 
    backgroundColor: '#0f172a', padding: 30, borderRadius: 20, 
    borderWidth: 1, borderColor: '#334155', marginBottom: 20,
    shadowColor: '#fbbf24', shadowOpacity: 0.1, shadowRadius: 20 
  },
  ritualTag: { color: '#fbbf24', fontSize: 10, fontWeight: 'bold', letterSpacing: 2, marginBottom: 10 },
  ritualName: { color: '#fff', fontSize: 28, fontWeight: 'bold' },
  ritualSub: { color: '#94a3b8', fontSize: 16, marginTop: 5 },
  playButton: { 
    backgroundColor: '#fbbf24', marginTop: 20, padding: 15, 
    borderRadius: 10, alignItems: 'center' 
  },
  playText: { color: '#000', fontWeight: '900', fontSize: 14 },

  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40 },
  statBox: { backgroundColor: '#111', width: '48%', padding: 20, borderRadius: 15, alignItems: 'center' },
  statNum: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  statLabel: { color: '#475569', fontSize: 10, fontWeight: 'bold', marginTop: 5 },

  pillarCard: { 
    backgroundColor: '#0a0a0a', padding: 20, borderRadius: 12, 
    marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', 
    alignItems: 'center', borderWidth: 1, borderColor: '#1a1a1a' 
  },
  pillarNum: { color: '#fbbf24', fontSize: 10, fontWeight: 'bold' },
  pillarTitle: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginTop: 2 },
  pillarMeta: { color: '#475569', fontSize: 11, marginTop: 4 },
  statusText: { fontSize: 18 },

  foundationSection: { marginTop: 20, borderTopWidth: 1, borderTopColor: '#1a1a1a', paddingTop: 30 },
  visionSmallCard: { backgroundColor: '#0f172a', padding: 20, borderRadius: 12 },
  visionSmallTitle: { color: '#38bdf8', fontSize: 16, fontWeight: 'bold' },
  visionSmallDesc: { color: '#64748b', fontSize: 12, marginTop: 4 },

  footer: { 
    position: 'absolute', bottom: 0, width: '100%', padding: 15, 
    backgroundColor: '#0a0a0a', alignItems: 'center' 
  },
  footerText: { color: '#334155', fontSize: 8, fontWeight: 'bold' }
});